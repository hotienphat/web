// ============================================
// THREE.JS 3D TREE IMPLEMENTATION
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("tree-canvas-container");
    if (!container || typeof THREE === "undefined") return;

    // 1. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 15;
    controls.maxDistance = 50;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xa855f7, 1, 50); 
    pointLight.position.set(-10, 5, -10);
    scene.add(pointLight);

    // 4. Ground
    const groundGeo = new THREE.CylinderGeometry(15, 15, 0.5, 32);
    const groundMat = new THREE.MeshStandardMaterial({ 
        color: 0x1a1a2e, 
        roughness: 0.8,
        metalness: 0.2
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.25;
    ground.receiveShadow = true;
    scene.add(ground);

    // 5. Create Tree
    const treeGroup = new THREE.Group();
    scene.add(treeGroup);

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 });
    const leafMats = {
        spring: new THREE.MeshStandardMaterial({ color: 0xffb7c5, roughness: 0.5 }), 
        summer: new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.5 }), 
        autumn: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5 })
    };

    let currentLeaves = [];

    function createBranch(startPoint, dir, length, radius, level) {
        if (level === 0) return;

        const cylinderGeo = new THREE.CylinderGeometry(radius * 0.7, radius, length, 8);
        const branch = new THREE.Mesh(cylinderGeo, trunkMat);
        branch.castShadow = true;
        branch.receiveShadow = true;

        branch.position.copy(startPoint).add(dir.clone().multiplyScalar(length / 2));
        branch.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        
        treeGroup.add(branch);

        const endPoint = startPoint.clone().add(dir.clone().multiplyScalar(length));

        if (level <= 2) {
            createLeaves(endPoint, radius * 8);
        }

        const branchesNum = level === 5 ? 3 : 2; 
        for (let i = 0; i < branchesNum; i++) {
            const angle = (Math.random() - 0.5) * Math.PI; 
            const axis = new THREE.Vector3(Math.random(), 0, Math.random()).normalize();
            
            const newDir = dir.clone().applyAxisAngle(axis, angle + 0.2).normalize();
            createBranch(endPoint, newDir, length * 0.75, radius * 0.65, level - 1);
        }
    }

    function createLeaves(position, size) {
        const leafGeo = new THREE.DodecahedronGeometry(size, 0); 
        const leaf = new THREE.Mesh(leafGeo, leafMats.spring); 
        
        leaf.position.copy(position).add(new THREE.Vector3(
            (Math.random() - 0.5) * size,
            (Math.random() - 0.5) * size,
            (Math.random() - 0.5) * size
        ));
        
        leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        leaf.castShadow = true;
        
        leaf.userData = {
            baseScale: Math.random() * 0.5 + 0.8,
            speed: Math.random() * 0.02 + 0.01
        };
        
        treeGroup.add(leaf);
        currentLeaves.push(leaf);
    }

    createBranch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0), 5, 0.8, 5);

    // 6. Season Logic
    const seasonBtns = document.querySelectorAll(".season-btn");
    seasonBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            seasonBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const season = btn.getAttribute("data-season");
            const newMat = leafMats[season];

            currentLeaves.forEach(leaf => {
                leaf.material = newMat;
            });
        });
    });

    // 7. Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        
        controls.update(); 

        const time = Date.now() * 0.001;
        currentLeaves.forEach((leaf, idx) => {
            const scale = leaf.userData.baseScale + Math.sin(time * 2 + idx) * 0.05;
            leaf.scale.set(scale, scale, scale);
        });

        renderer.render(scene, camera);
    }
    
    animate();

    // 8. Handle Resize
    window.addEventListener("resize", () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});
