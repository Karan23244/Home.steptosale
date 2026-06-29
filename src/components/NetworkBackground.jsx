import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default function NetworkBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    if (!container) return;

    //-------------------------------------
    // Scene
    //-------------------------------------

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );

    camera.position.z = 30;

    //-------------------------------------
    // Renderer
    //-------------------------------------

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    //-------------------------------------
    // Colors
    //-------------------------------------

    const PRIMARY = new THREE.Color("#323232");
    const SECONDARY = new THREE.Color("#121212");

    //-------------------------------------
    // Nodes
    //-------------------------------------

    const nodes = [];

    const nodeCount = window.innerWidth < 768 ? 120 : 300;

    const geometry = new THREE.IcosahedronGeometry(0.35, 3);

    for (let i = 0; i < nodeCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: PRIMARY,
        transparent: true,
        opacity: 0.8,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 35,
      );

      mesh.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.025,
        (Math.random() - 0.5) * 0.025,
        (Math.random() - 0.5) * 0.025,
      );

      mesh.userData.rotation = (Math.random() - 0.5) * 0.02;
      mesh.userData.baseColor = PRIMARY.clone();
      mesh.userData.hoverColor = SECONDARY.clone();
      mesh.userData.hoverState = 0;
      scene.add(mesh);

      nodes.push(mesh);
    }

    //-------------------------------------
    // Connection Lines
    //-------------------------------------

    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#515151", // dark red
      transparent: true,
      opacity: 0.7,
    });

    let lineGeometry = new THREE.BufferGeometry();

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

    scene.add(lines);

    //-------------------------------------
    // Floating Particles
    //-------------------------------------

    const particleCount = 300;

    const particleGeometry = new THREE.BufferGeometry();

    const particlePositions = new Float32Array(particleCount * 3);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);

    scene.add(particles);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 80;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const color =
        Math.random() > 0.5
          ? new THREE.Color("#00ffd5")
          : new THREE.Color("#ff2cc4");

      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3),
    );
    //-------------------------------------
    // Lights
    //-------------------------------------

    const light1 = new THREE.PointLight("#00ffd5", 2.5, 120);
    light1.position.set(30, 30, 30);
    scene.add(light1);

    const light2 = new THREE.PointLight("#ff2cc4", 2.5, 120);
    light2.position.set(-30, -30, 30);
    scene.add(light2);

    const light3 = new THREE.PointLight("#3a1cbd", 1.5, 150);
    light3.position.set(0, -40, -20);
    scene.add(light3);

    const ambient = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambient);

    //-------------------------------------
    // Mouse
    //-------------------------------------

    let mouseX = 0;
    let mouseY = 0;

    const mouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      mouseX = mouse.x * 18;
      mouseY = mouse.y * 18;
    };
    window.addEventListener("mousemove", mouseMove);
    //-------------------------------------
    // Resize
    //-------------------------------------

    const resize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", resize);

    //-------------------------------------
    // Animation
    //-------------------------------------

    let animationFrame;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      camera.position.x += (mouseX - camera.position.x) * 0.06;
      camera.position.y += (-mouseY - camera.position.y) * 0.06;

      camera.lookAt(0, 0, 0);

      particles.rotation.y += 0.0006;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(nodes);
      const positions = [];

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        a.rotation.x += a.userData.rotation;
        a.rotation.y += a.userData.rotation;

        a.position.add(a.userData.velocity);
        a.userData.hoverState *= 0.9;

        a.material.color
          .copy(a.userData.baseColor)
          .lerp(a.userData.hoverColor, a.userData.hoverState);
        if (a.position.length() > 35) {
          a.userData.velocity.multiplyScalar(-0.95);
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];

          const dist = a.position.distanceTo(b.position);

          if (dist < 7) {
            positions.push(
              a.position.x,
              a.position.y,
              a.position.z,
              b.position.x,
              b.position.y,
              b.position.z,
            );
          }
        }
      }

      lineGeometry.dispose();

      lineGeometry = new THREE.BufferGeometry();

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3),
      );

      lines.geometry = lineGeometry;

      renderer.render(scene, camera);
      if (intersects.length > 0) {
        const hovered = intersects[0].object;

        hovered.userData.hoverState = 1;

        nodes.forEach((node) => {
          const dist = node.position.distanceTo(hovered.position);

          if (dist < 6 && node !== hovered) {
            node.userData.hoverState = Math.max(
              node.userData.hoverState,
              1 - dist / 6,
            );
          }
        });
      }
    };

    animate();
    const clickHandler = () => {
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(nodes);

      if (intersects.length) {
        intersects[0].object.userData.velocity.add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2,
          ),
        );
      }
    };
    //-------------------------------------
    // Cleanup
    //-------------------------------------

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);

      window.removeEventListener("mousemove", mouseMove);

      geometry.dispose();
      lineGeometry.dispose();
      particleGeometry.dispose();

      lineMaterial.dispose();
      particleMaterial.dispose();

      nodes.forEach((node) => {
        node.geometry.dispose();
        node.material.dispose();
      });

      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener("click", clickHandler);
    };

    window.addEventListener("click", clickHandler);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
