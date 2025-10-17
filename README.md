# React Computers 3D Scene

An interactive and customizable 3D scene featuring a collection of vintage computers, built with React and the Three.js ecosystem. The application is rendered in real-time and includes a control panel to dynamically change various aspects of the scene, such as text, colors, and animations.

**Live Demo:** [**https://imrovoid.github.io/React-Computers-3D-Scene/**](https://imrovoid.github.io/React-Computers-3D-Scene/)

![React 3D Computers Scene Screenshot](https://raw.githubusercontent.com/IMROVOID/React-Computers-3D-Scene/main/public/screenshot.png)

---

## ✨ Features

*   **Real-time 3D Rendering:** A smooth, animated 3D environment right in your browser.
*   **Dynamic Lighting & Post-processing:** Features spotlights, bloom effects, and reflections for a realistic atmosphere.
*   **GLTF Model Integration:** Utilizes an optimized, instanced GLTF model of old computers for efficient rendering.
*   **Interactive Control Panel:** A user-friendly GUI allows you to customize the scene in real-time.
*   **Customizable Properties:**
    *   Modify the text displayed on all monitor screens.
    *   Change the color of the monitor screens and the central monitor background.
    *   Adjust the glow intensity for both.
    *   Select the shape (Cube, Sphere, Torus) for the central monitor.
    *   Change the color, scale, and rotation speed of the central shape.
    *   Toggle rotation and hover effects on or off.

## 🛠️ Technology Stack

This project was built using a modern web development stack, leveraging the power of the React and Three.js ecosystems.

*   **Framework:** [**React**](https://github.com/facebook/react)
*   **Build Tool:** [**Vite**](https://github.com/vitejs/vite)
*   **3D Library:** [**Three.js**](https://github.com/mrdoob/three.js/)
*   **React Renderer for Three.js:** [**React Three Fiber**](https://github.com/pmndrs/react-three-fiber)
*   **Helper Components:** [**React Three Drei**](https://github.com/pmndrs/drei)
*   **Post-processing:** [**React Three Postprocessing**](https://github.com/pmndrs/react-postprocessing)
*   **GUI / Control Panel:** [**Leva**](https://github.com/pmndrs/leva)
*   **Language:** [**TypeScript**](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Local Development

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IMROVOID/React-Computers-3D-Scene.git
    cd React-Computers-3D-Scene
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

---

## 🔧 How It Works & Modification Guide

The project structure is organized to be modular and easy to understand.

*   **`src/App.tsx`**: This is the main entry point for the 3D scene. It sets up the `Canvas`, lighting, post-processing effects, and the Leva control panel using the `useControls` hook. All customizable properties are defined here and passed down as props to the `Computers` component.

*   **`src/Computers.tsx`**: This component is responsible for rendering the main computer scene. It loads the GLTF model and dynamically renders the interactive screens (`ScreenText`, `ScreenInteractive`) based on the props received from `App.tsx`. To change which monitors display which content, you can modify the components called at the bottom of this file.

*   **`src/SpinningBox.tsx`**: This component renders the dynamic shape in the central monitor. It receives props to control its geometry (`shapeType`), color, scale, and animation behavior (rotation, hover effects). You can easily add more shapes by extending the `Shape` component within this file.

To modify the application, simply adjust the components or change the default values in the `useControls` hook in `App.tsx`.

---

## 🌐 Deploying to GitHub Pages

This repository is pre-configured for easy deployment to GitHub Pages.

### Step 1: Push Your Code

Commit and push any changes you've made to your GitHub repository.

```bash
git add .
git commit -m "My new changes"
git push origin main
```

### Step 2: Run the Deploy Script

In your terminal, run the following command:

```bash
npm run deploy
```

This command automatically builds the project into a `dist` folder and pushes that folder to a special `gh-pages` branch on your repository.

### Step 3: Configure Repository Settings

1.  In your GitHub repository, go to **Settings > Pages**.
2.  Under "Build and deployment", set the **Source** to **"Deploy from a branch"**.
3.  Set the **Branch** to **`gh-pages`** and the folder to **`/ (root)`**.
4.  Click **Save**.

Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` within a few minutes.

---

## 📜 License & Copyright

This project is completely open source and available to the public. You are free to use, modify, distribute, and fork this software for any purpose. No attribution is required, but it is appreciated.

---

## © About the Developer

This application was developed and is maintained by **Roham Andarzgou**.

I'm a passionate professional from Iran specializing in Graphic Design, Web Development, and cross-platform app development with Dart & Flutter. I thrive on turning innovative ideas into reality, whether it's a stunning visual, a responsive website, or a polished desktop app like this one. I also develop immersive games using Unreal Engine.

*   **Website:** [rovoid.ir](https://rovoid.ir)
*   **GitHub:** [IMROVOID](https://github.com/IMROVOID)
*   **LinkedIn:** [Roham Andarzgou](https://www.linkedin.com/in/roham-andarzgouu)

### 🙏 Support This Project

If you find this application useful, please consider a donation. As I am based in Iran, cryptocurrency is the only way I can receive support. Thank you!

| Cryptocurrency | Address |
| :--- | :--- |
| **Bitcoin** (BTC) | `bc1qd35yqx3xt28dy6fd87xzd62cj7ch35p68ep3p8` |
| **Ethereum** (ETH) | `0xA39Dfd80309e881cF1464dDb00cF0a17bF0322e3` |
| **USDT** (TRC20) | `THMe6FdXkA2Pw45yKaXBHRnkX3fjyKCzfy` |
| **Solana** (SOL) | `9QZHMTN4Pu6BCxiN2yABEcR3P4sXtBjkog9GXNxWbav1` |
| **TON** | `UQCp0OawnofpZTNZk-69wlqIx_wQpzKBgDpxY2JK5iynh3mC` |