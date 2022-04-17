import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Scene
const scene = new THREE.Scene()

// box
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer(
    {
        canvas
    }
)
renderer.setSize(sizes.width, sizes.height)
// deltatime method
// let time = Date.now()

// clock method
const clock = new THREE.Clock()

// // gsap
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
// gsap.to(mesh.position, { duration: 1, delay: 2, x: -1 })

// ANIMATION
const tick = () => {

    // // time

    // // const currentTime = Date.now()
    // // const deltaTime = currentTime - time
    // // time = currentTime

    const elapsedTime = clock.getElapsedTime()

    // // update
    // // mesh.position.x -= 0.01
    // // mesh.position.y -= 0.01
    camera.position.x = Math.tan(elapsedTime)
    camera.position.y = Math.tan(elapsedTime)
    camera.lookAt(mesh.position)




    // render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
