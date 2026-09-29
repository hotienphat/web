// ============================================================================
// THREE.JS INTERACTIVE 3D TREE OF SEASONS (ENHANCED)
// ============================================================================

(function () {
    "use strict";

    // Wait until DOM is ready
    function onReady(fn) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    onReady(() => {
        const container = document.getElementById("tree-canvas-container");
        if (!container) return;

        // Ensure THREE is loaded; if not yet available, retry with exponential backoff
        let retries = 0;
        const maxRetries = 25;
        function checkThreeAndInit() {
            if (typeof THREE !== "undefined") {
                initTreeExperience(container);
            } else if (retries < maxRetries) {
                retries++;
                setTimeout(checkThreeAndInit, 120);
            } else {
                console.warn("[Tree3D] Three.js library failed to load in time.");
                const loader = document.getElementById("treeLoader");
                if (loader) loader.innerHTML = `<span style="color:#ef4444;">Không thể tải Three.js. Vui lòng thử tải lại trang.</span>`;
            }
        }
        checkThreeAndInit();
    });

    function initTreeExperience(container) {
        const loader = document.getElementById("treeLoader");
        const hintBadge = document.querySelector(".tree-hint-badge");
        const resetBtn = document.getElementById("treeResetBtn");
        const rotateBtn = document.getElementById("treeRotateToggleBtn");
        const seasonBtns = document.querySelectorAll(".season-btn");

        // -------------------------------------------------------------
        // 1. Scene, Camera, Renderer Setup
        // -------------------------------------------------------------
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0a0a16, 0.016);

        let width = container.clientWidth || 800;
        let height = container.clientHeight || 550;

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        const defaultCamPos = new THREE.Vector3(0, 15, 30);
        const defaultTarget = new THREE.Vector3(0, 7.5, 0);
        camera.position.copy(defaultCamPos);
        camera.lookAt(defaultTarget);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.1;

        // Clear container and append canvas
        container.innerHTML = "";
        if (loader) container.appendChild(loader);
        container.appendChild(renderer.domElement);

        // -------------------------------------------------------------
        // 2. Camera Controls (OrbitControls or Custom Fallback)
        // -------------------------------------------------------------
        let controls = null;
        let isAutoRotating = true;
        let isUserInteracting = false;

        if (typeof THREE.OrbitControls === "function") {
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.06;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.9;
            controls.maxPolarAngle = Math.PI / 2 + 0.05; // Don't flip below base
            controls.minPolarAngle = 0.15;
            controls.minDistance = 12;
            controls.maxDistance = 50;
            controls.target.copy(defaultTarget);

            controls.addEventListener("start", () => {
                isUserInteracting = true;
                if (hintBadge) hintBadge.style.opacity = "0.3";
            });
            controls.addEventListener("end", () => {
                isUserInteracting = false;
                setTimeout(() => {
                    if (hintBadge && !isUserInteracting) hintBadge.style.opacity = "1";
                }, 2000);
            });
        } else {
            // Safe built-in fallback controls if OrbitControls script was blocked
            let isDragging = false;
            let prevMouseX = 0;
            let prevMouseY = 0;
            let spherical = { radius: 32, theta: 0, phi: Math.PI / 3 };

            function updateCameraFromSpherical() {
                camera.position.x = defaultTarget.x + spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
                camera.position.y = defaultTarget.y + spherical.radius * Math.cos(spherical.phi);
                camera.position.z = defaultTarget.z + spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
                camera.lookAt(defaultTarget);
            }

            renderer.domElement.addEventListener("mousedown", (e) => {
                isDragging = true;
                prevMouseX = e.clientX;
                prevMouseY = e.clientY;
            });
            window.addEventListener("mouseup", () => { isDragging = false; });
            window.addEventListener("mousemove", (e) => {
                if (!isDragging) return;
                const dx = e.clientX - prevMouseX;
                const dy = e.clientY - prevMouseY;
                prevMouseX = e.clientX;
                prevMouseY = e.clientY;
                spherical.theta -= dx * 0.006;
                spherical.phi = Math.max(0.2, Math.min(Math.PI / 2 + 0.05, spherical.phi - dy * 0.006));
                updateCameraFromSpherical();
            });

            renderer.domElement.addEventListener("wheel", (e) => {
                e.preventDefault();
                spherical.radius = Math.max(12, Math.min(50, spherical.radius + e.deltaY * 0.02));
                updateCameraFromSpherical();
            }, { passive: false });

            controls = {
                update: () => {
                    if (isAutoRotating && !isDragging) {
                        spherical.theta += 0.005;
                        updateCameraFromSpherical();
                    }
                },
                target: defaultTarget,
                autoRotate: true
            };
        }

        // -------------------------------------------------------------
        // 3. Lighting System
        // -------------------------------------------------------------
        const ambientLight = new THREE.AmbientLight(0xd4d4f7, 0.6);
        scene.add(ambientLight);

        // Sunlight / Directional Light with Shadows
        const dirLight = new THREE.DirectionalLight(0xfff8ee, 1.1);
        dirLight.position.set(16, 28, 16);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 80;
        dirLight.shadow.camera.left = -18;
        dirLight.shadow.camera.right = 18;
        dirLight.shadow.camera.top = 18;
        dirLight.shadow.camera.bottom = -18;
        dirLight.shadow.bias = -0.0005;
        scene.add(dirLight);

        // Seasonal Canopy Point Light
        const canopyLight = new THREE.PointLight(0xff70a6, 2.2, 35, 1.8);
        canopyLight.position.set(0, 9, 0);
        scene.add(canopyLight);

        // Floating Island Underglow Light
        const underLight = new THREE.PointLight(0x8b5cf6, 1.8, 30, 2);
        underLight.position.set(0, -4, 0);
        scene.add(underLight);

        // -------------------------------------------------------------
        // 4. Floating Island Pedestal & Futuristic Cyber Ring
        // -------------------------------------------------------------
        const islandGroup = new THREE.Group();
        scene.add(islandGroup);

        // Main floating rock island
        const islandGeo = new THREE.CylinderGeometry(13, 10.5, 2.2, 28);
        const islandMat = new THREE.MeshStandardMaterial({
            color: 0x16152a,
            roughness: 0.85,
            metalness: 0.15,
            flatShading: true
        });
        const islandMesh = new THREE.Mesh(islandGeo, islandMat);
        islandMesh.position.y = -1.1;
        islandMesh.receiveShadow = true;
        islandGroup.add(islandMesh);

        // Upper grass/moss disc
        const grassGeo = new THREE.CylinderGeometry(12.8, 12.8, 0.35, 28);
        const grassMat = new THREE.MeshStandardMaterial({
            color: 0x232042,
            roughness: 0.75,
            metalness: 0.1
        });
        const grassMesh = new THREE.Mesh(grassGeo, grassMat);
        grassMesh.position.y = 0.05;
        grassMesh.receiveShadow = true;
        islandGroup.add(grassMesh);

        // Glowing Neon Torus Ring around the island
        const ringGeo = new THREE.TorusGeometry(13.6, 0.18, 16, 48);
        const ringMat = new THREE.MeshStandardMaterial({
            color: 0xa855f7,
            emissive: 0xa855f7,
            emissiveIntensity: 0.9,
            roughness: 0.3
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = -0.5;
        islandGroup.add(ringMesh);

        // Floating Satellite Crystals orbiting the island
        const crystalGroup = new THREE.Group();
        islandGroup.add(crystalGroup);
        const crystalGeo = new THREE.OctahedronGeometry(0.7, 0);
        const crystalMat = new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            emissive: 0x38bdf8,
            emissiveIntensity: 0.5,
            roughness: 0.2,
            metalness: 0.8
        });

        const crystals = [];
        const crystalCount = 7;
        for (let i = 0; i < crystalCount; i++) {
            const crystal = new THREE.Mesh(crystalGeo, crystalMat);
            const angle = (i / crystalCount) * Math.PI * 2;
            const dist = 14.8 + Math.random() * 2.5;
            crystal.position.set(Math.cos(angle) * dist, (Math.random() - 0.5) * 2 - 1, Math.sin(angle) * dist);
            crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            crystal.userData = {
                angle,
                dist,
                speed: 0.2 + Math.random() * 0.15,
                bobOffset: Math.random() * Math.PI * 2,
                bobSpeed: 1 + Math.random() * 0.5
            };
            crystalGroup.add(crystal);
            crystals.push(crystal);
        }

        // -------------------------------------------------------------
        // 5. Stylized Low-Poly Bonsai Tree Generation
        // -------------------------------------------------------------
        const treeGroup = new THREE.Group();
        scene.add(treeGroup);

        const trunkMat = new THREE.MeshStandardMaterial({
            color: 0x3b2416,
            roughness: 0.88,
            metalness: 0.05,
            flatShading: true
        });

        // 4-Season Leaf Palettes
        const seasonPalettes = {
            spring: [0xff9ebb, 0xff70a6, 0xffb7c5, 0xfce7f3, 0xf472b6],
            summer: [0x10b981, 0x059669, 0x34d399, 0x6ee7b7, 0x047857],
            autumn: [0xf59e0b, 0xf97316, 0xd97706, 0xef4444, 0xb45309],
            winter: [0x38bdf8, 0x0284c7, 0x7dd3fc, 0xe0f2fe, 0xffffff]
        };

        const seasonLightColors = {
            spring: { canopy: 0xff70a6, ring: 0xff70a6, ambient: 0xfce7f3 },
            summer: { canopy: 0x10b981, ring: 0x34d399, ambient: 0xecfdf5 },
            autumn: { canopy: 0xf59e0b, ring: 0xf97316, ambient: 0xffedd5 },
            winter: { canopy: 0x38bdf8, ring: 0x60a5fa, ambient: 0xf0f9ff }
        };

        let currentSeason = "spring";
        const leafMeshes = [];

        function createBranch(startPoint, dir, length, radius, level) {
            if (level === 0) return;

            const cylinderGeo = new THREE.CylinderGeometry(radius * 0.72, radius, length, 7);
            const branch = new THREE.Mesh(cylinderGeo, trunkMat);
            branch.castShadow = true;
            branch.receiveShadow = true;

            // Center and orient cylinder along direction vector
            branch.position.copy(startPoint).add(dir.clone().multiplyScalar(length / 2));
            branch.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
            treeGroup.add(branch);

            const endPoint = startPoint.clone().add(dir.clone().multiplyScalar(length));

            // Generate foliage clusters at medium and high branch levels
            if (level <= 3) {
                const clusterCount = level === 1 ? 4 : (level === 2 ? 3 : 2);
                for (let c = 0; c < clusterCount; c++) {
                    createLeafCluster(endPoint, radius * (5 + Math.random() * 3));
                }
            }

            const branchesNum = level === 5 ? 3 : (level === 4 ? 3 : 2);
            for (let i = 0; i < branchesNum; i++) {
                const spreadAngle = (0.35 + Math.random() * 0.3) * Math.PI;
                const axis = new THREE.Vector3(
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 0.5,
                    (Math.random() - 0.5) * 2
                ).normalize();

                const newDir = dir.clone().applyAxisAngle(axis, (Math.random() - 0.5) * spreadAngle + 0.3).normalize();
                newDir.y = Math.max(0.15, newDir.y); // Tend upwards
                newDir.normalize();

                createBranch(
                    endPoint,
                    newDir,
                    length * (0.7 + Math.random() * 0.15),
                    radius * 0.65,
                    level - 1
                );
            }
        }

        function createLeafCluster(position, baseSize) {
            const palette = seasonPalettes[currentSeason];
            const color = palette[Math.floor(Math.random() * palette.length)];

            const leafGeo = (Math.random() > 0.5)
                ? new THREE.DodecahedronGeometry(baseSize * (0.8 + Math.random() * 0.5), 0)
                : new THREE.IcosahedronGeometry(baseSize * (0.75 + Math.random() * 0.5), 0);

            const leafMat = new THREE.MeshStandardMaterial({
                color: color,
                roughness: 0.45,
                metalness: 0.1,
                flatShading: true
            });

            const leaf = new THREE.Mesh(leafGeo, leafMat);
            const spread = baseSize * 0.7;
            leaf.position.copy(position).add(new THREE.Vector3(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread * 0.7,
                (Math.random() - 0.5) * spread
            ));
            leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            leaf.castShadow = true;
            leaf.receiveShadow = true;

            leaf.userData = {
                baseScale: 1,
                swaySpeed: 1.2 + Math.random() * 1.5,
                swayOffset: Math.random() * Math.PI * 2,
                paletteIndex: Math.floor(Math.random() * 5)
            };

            treeGroup.add(leaf);
            leafMeshes.push(leaf);
        }

        // Build the tree (Trunk starts from origin at y = 0.2)
        createBranch(new THREE.Vector3(0, 0.2, 0), new THREE.Vector3(0, 1, 0), 5.5, 1.0, 5);

        // -------------------------------------------------------------
        // 6. Dynamic Seasonal Particle Atmosphere
        // -------------------------------------------------------------
        const particleCount = 200;
        const particleGroup = new THREE.Group();
        scene.add(particleGroup);

        const particleMeshes = [];
        const particleGeo = new THREE.PlaneGeometry(0.3, 0.45);

        for (let i = 0; i < particleCount; i++) {
            const pMat = new THREE.MeshBasicMaterial({
                color: 0xff9ebb,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.7 + Math.random() * 0.3
            });
            const pMesh = new THREE.Mesh(particleGeo, pMat);

            pMesh.position.set(
                (Math.random() - 0.5) * 32,
                Math.random() * 24 + 1,
                (Math.random() - 0.5) * 32
            );
            pMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

            pMesh.userData = {
                vy: -0.04 - Math.random() * 0.05,
                vx: (Math.random() - 0.5) * 0.03,
                vz: (Math.random() - 0.5) * 0.03,
                rotSpeedX: (Math.random() - 0.5) * 0.04,
                rotSpeedY: (Math.random() - 0.5) * 0.04,
                rotSpeedZ: (Math.random() - 0.5) * 0.04,
                flutterAmp: 0.015 + Math.random() * 0.02,
                timeOffset: Math.random() * 10
            };

            particleGroup.add(pMesh);
            particleMeshes.push(pMesh);
        }

        function updateParticleAppearance(season) {
            particleMeshes.forEach((p, idx) => {
                const mat = p.material;
                if (season === "spring") {
                    // Cherry Blossom Petals
                    mat.color.setHex(idx % 2 === 0 ? 0xffb7c5 : 0xff70a6);
                    p.scale.set(1, 1.4, 1);
                    p.userData.vy = -0.035 - Math.random() * 0.03;
                } else if (season === "summer") {
                    // Fireflies rising and drifting
                    mat.color.setHex(idx % 2 === 0 ? 0x34d399 : 0xfef08a);
                    p.scale.set(0.7, 0.7, 0.7);
                    p.userData.vy = 0.02 + Math.random() * 0.025; // Rise up
                } else if (season === "autumn") {
                    // Falling Golden Maple Leaves
                    mat.color.setHex([0xf59e0b, 0xf97316, 0xef4444][idx % 3]);
                    p.scale.set(1.2, 1.5, 1);
                    p.userData.vy = -0.045 - Math.random() * 0.04;
                } else if (season === "winter") {
                    // Snowflakes
                    mat.color.setHex(idx % 3 === 0 ? 0x93c5fd : 0xffffff);
                    p.scale.set(0.6, 0.6, 0.6);
                    p.userData.vy = -0.025 - Math.random() * 0.03;
                }
            });
        }
        updateParticleAppearance(currentSeason);

        // -------------------------------------------------------------
        // 7. Season Transition Logic
        // -------------------------------------------------------------
        function applySeason(season) {
            currentSeason = season;
            const palette = seasonPalettes[season] || seasonPalettes.spring;
            const colors = seasonLightColors[season] || seasonLightColors.spring;

            // Transition canopy leaves colors
            leafMeshes.forEach((leaf) => {
                const colorHex = palette[leaf.userData.paletteIndex % palette.length];
                leaf.material.color.setHex(colorHex);
            });

            // Update Lights
            canopyLight.color.setHex(colors.canopy);
            ringMat.color.setHex(colors.ring);
            ringMat.emissive.setHex(colors.ring);
            ambientLight.color.setHex(colors.ambient);

            // Update Particles
            updateParticleAppearance(season);

            // Update Buttons active class
            seasonBtns.forEach((btn) => {
                if (btn.getAttribute("data-season") === season) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });
        }

        seasonBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const season = btn.getAttribute("data-season");
                if (season && season !== currentSeason) {
                    applySeason(season);
                }
            });
        });

        // -------------------------------------------------------------
        // 8. Toolbar Controls (Auto-Rotate & Reset)
        // -------------------------------------------------------------
        if (rotateBtn) {
            rotateBtn.addEventListener("click", () => {
                isAutoRotating = !isAutoRotating;
                if (controls) controls.autoRotate = isAutoRotating;

                if (isAutoRotating) {
                    rotateBtn.classList.add("active");
                    rotateBtn.innerHTML = `<i class="fas fa-sync-alt fa-spin"></i> <span>Tự xoay</span>`;
                } else {
                    rotateBtn.classList.remove("active");
                    rotateBtn.innerHTML = `<i class="fas fa-play"></i> <span>Tự xoay</span>`;
                }
            });
        }

        let isResetting = false;
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                if (isResetting) return;
                isResetting = true;

                const startPos = camera.position.clone();
                const startTarget = controls.target ? controls.target.clone() : defaultTarget.clone();
                const startTime = performance.now();
                const duration = 900; // ms

                function stepReset(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(1, elapsed / duration);
                    // Cubic ease out
                    const ease = 1 - Math.pow(1 - progress, 3);

                    camera.position.lerpVectors(startPos, defaultCamPos, ease);
                    if (controls.target) {
                        controls.target.lerpVectors(startTarget, defaultTarget, ease);
                    } else {
                        camera.lookAt(defaultTarget);
                    }

                    if (progress < 1) {
                        requestAnimationFrame(stepReset);
                    } else {
                        isResetting = false;
                    }
                }
                requestAnimationFrame(stepReset);
            });
        }

        // -------------------------------------------------------------
        // 9. Resize Handling & ResizeObserver (Crucial for unhiding)
        // -------------------------------------------------------------
        function handleResize() {
            if (!container) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            if (w === 0 || h === 0) return;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }

        if (window.ResizeObserver) {
            const ro = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        handleResize();
                    }
                }
            });
            ro.observe(container);
        }
        window.addEventListener("resize", handleResize);

        // Hide loader once setup is complete and first frame is ready
        if (loader) {
            setTimeout(() => {
                loader.classList.add("hidden");
            }, 300);
        }

        // -------------------------------------------------------------
        // 10. Animation Loop & Visibility Caching
        // -------------------------------------------------------------
        let isSceneVisible = true;
        let animationFrameId = null;

        // Use IntersectionObserver to pause rendering when scrolled out of view
        if ("IntersectionObserver" in window) {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    isSceneVisible = entry.isIntersecting;
                    if (isSceneVisible && !animationFrameId) {
                        animate();
                    }
                });
            }, { threshold: 0.05 });
            io.observe(container);
        }

        const clock = new THREE.Clock();

        function animate() {
            if (!isSceneVisible) {
                animationFrameId = null;
                return;
            }

            animationFrameId = requestAnimationFrame(animate);

            const delta = clock.getDelta();
            const time = clock.getElapsedTime();

            // Update Controls
            if (controls) controls.update();

            // Subtle Island Float Bobbing
            islandGroup.position.y = Math.sin(time * 0.8) * 0.2;
            treeGroup.position.y = islandGroup.position.y;

            // Crystals orbit & bob around island
            crystals.forEach((crystal) => {
                crystal.userData.angle += crystal.userData.speed * delta;
                crystal.position.x = Math.cos(crystal.userData.angle) * crystal.userData.dist;
                crystal.position.z = Math.sin(crystal.userData.angle) * crystal.userData.dist;
                crystal.position.y = -0.5 + Math.sin(time * crystal.userData.bobSpeed + crystal.userData.bobOffset) * 0.4;
                crystal.rotation.x += 0.01;
                crystal.rotation.y += 0.015;
            });

            // Foliage Organic Breathing / Sway
            for (let i = 0; i < leafMeshes.length; i++) {
                const leaf = leafMeshes[i];
                const s = 1.0 + Math.sin(time * leaf.userData.swaySpeed + leaf.userData.swayOffset) * 0.035;
                leaf.scale.set(s, s, s);
            }

            // Particle Updates
            const pBoxLimit = 16;
            for (let i = 0; i < particleMeshes.length; i++) {
                const p = particleMeshes[i];
                const u = p.userData;

                p.position.y += u.vy;
                p.position.x += u.vx + Math.sin(time * 1.5 + u.timeOffset) * u.flutterAmp;
                p.position.z += u.vz + Math.cos(time * 1.2 + u.timeOffset) * u.flutterAmp;

                p.rotation.x += u.rotSpeedX;
                p.rotation.y += u.rotSpeedY;
                p.rotation.z += u.rotSpeedZ;

                // Bounds wrap around
                if (currentSeason === "summer") {
                    // Fireflies rising: wrap when too high
                    if (p.position.y > 25) {
                        p.position.y = -1;
                        p.position.x = (Math.random() - 0.5) * 28;
                        p.position.z = (Math.random() - 0.5) * 28;
                    }
                } else {
                    // Falling particles: wrap when hitting ground
                    if (p.position.y < -2) {
                        p.position.y = 22 + Math.random() * 5;
                        p.position.x = (Math.random() - 0.5) * 30;
                        p.position.z = (Math.random() - 0.5) * 30;
                    }
                }
            }

            renderer.render(scene, camera);
        }

        animate();
    }
})();
