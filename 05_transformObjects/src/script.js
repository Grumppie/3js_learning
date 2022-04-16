import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// box
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)

// Position object

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

mesh.position.set(0.7, -0.6, 1)

// Scale object

// mesh.scale.x = 2
// mesh.scale.y = 0.4

mesh.scale.set(2, 0.5, 0.5)

// Rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

scene.add(mesh)

// Group
const group = new THREE.Group()
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x21f4f5 })
)
cube1.position.x = -2
cube3.position.x = 2
group.add(cube3)
group.rotation.x = 2
scene.add(group)

// axes helper

const axesHelper = new THREE.AxisHelper(1)
scene.add(axesHelper)


const sizes = {
    width: 800,
    height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Look at
// camera.lookAt(mesh.position)

// renderer
const canvas = document.querySelector(".webgl")
console.log(canvas)
const renderer = new THREE.WebGLRenderer(
    {
        canvas
    }
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

