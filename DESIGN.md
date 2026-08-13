---
name: "Fot Portfolio"
description: "A dark-themed, highly interactive personal portfolio featuring an integrated music player and canvas-based visual effects."
colors:
  primary:
    value: "#a855f7"
  secondary:
    value: "#22d3ee"
  background:
    value: "#06060e"
  surface:
    value: "rgba(15, 15, 35, 0.65)"
  textPrimary:
    value: "#e8eaf0"
  textSecondary:
    value: "#9ba1b0"
typography:
  heading:
    family: "'Space Grotesk', sans-serif"
    weight: "700"
  body:
    family: "'Inter', sans-serif"
    weight: "400"
spacing:
  sectionGap: "5rem"
  containerMax: "1200px"
rounded:
  md: "12px"
  lg: "16px"
  xl: "20px"
  2xl: "24px"
components:
  - button
  - card
  - music-player
---
# Design System

## Overview
A dark, immersive personal space that prioritizes engagement through motion and music. The visual language blends a deep space/cyberpunk aesthetic (neon purples and cyans on near-black backgrounds) with glassmorphism (translucent surfaces with background blur). 

**Key Characteristics:**
- **Immersive Backgrounds:** Deep gradient backgrounds augmented with canvas particles and glow effects.
- **Glassmorphism Elements:** Surfaces use translucency and blur to create depth without solid colors.
- **Neon Accents:** Purple and cyan gradients are used for primary interactions, borders, and text highlights.

**The Music-First Rule.** The interface is designed to be browsed while listening to music. Visualizers and subtle animations should complement the audio experience, not overwhelm the reading experience.

## Colors
The palette is built on deep, space-like darks with vibrant neon accents.

- **Background:** Primary background is a deep dark `#06060e`.
- **Surface:** Glassmorphic surfaces use `rgba(15, 15, 35, 0.65)` to stand out from the background while maintaining depth.
- **Text:** Primary text is a soft white `#e8eaf0` for readability against dark backgrounds, with `#9ba1b0` for secondary information.
- **Accents:** Purple (`#a855f7`) and Cyan (`#22d3ee`) form the primary gradient pairing for calls to action, active states, and glowing borders.

## Typography
A dual-font system that pairs a geometric, character-rich display font with a highly legible interface font.

- **Headings (Space Grotesk):** Used for large titles, logos, and section headers to inject personality.
- **Body (Inter):** Used for all interface text, descriptions, and metadata to ensure maximum legibility at small sizes.

## Layout
The layout uses a centered container approach with generous vertical rhythm.

- **Container:** Maximum width of `1200px` with `1.5rem` horizontal padding for mobile breathing room.
- **Section Spacing:** Generous `5rem` vertical gaps between major content sections to allow the background effects to breathe.

## Elevation & Depth
Depth is created through glassmorphism and colored shadows rather than traditional drop shadows.

- **Surfaces:** Use `backdrop-filter: blur(15px)` to float above the animated background.
- **Hover States:** Interactive elements elevate by translating Y upwards and glowing with the accent colors.

## Shapes
Forms are generally soft and pill-like to contrast with the technical, neon color palette.

- **Cards:** Heavy rounding (`16px` to `24px`) for content blocks and shortcut items.
- **Inputs & Buttons:** Medium rounding (`12px`) for interactive controls.

## Components
- **Shortcut Cards:** Glassmorphic grids that reveal a colored radial gradient on hover.
- **Music Player:** A floating, collapsible chat-head style widget that expands into a full control panel.
- **Donate Cards:** Interactive blocks that hide/reveal QR codes to save space.

## Do's and Don'ts
- **Do** use gradients for primary text headers to establish hierarchy.
- **Do** ensure interactive elements have a clear, glowing hover state.
- **Don't** use solid, opaque backgrounds for cards; always rely on the glass effect.
- **Don't** mix accent colors haphazardly; stick to the Purple/Cyan pairing unless representing a specific brand (e.g., Momo pink).
