let scene, camera, renderer, geometry, group

init()
render()

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const beautifulBoxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const beautifulBoxMaterial = new THREE.MeshLambertMaterial({color: 0xFF69B4})
    
    const light1 = new THREE.DirectionalLight(0xEEFFD3, 1)
    light1.position.set(0, 0, 1)
    scene.add(light1)

    const light2 = new THREE.DirectionalLight(0xFF0000, 0.4)
    light2.position.set(1, 0, 0)
    scene.add(light2)

    const light3 = new THREE.DirectionalLight(0xFFFFFF, 0.2)
    light3.position.set(0, 1, 0)
    scene.add(light3)

    const strongBox = new THREE.Mesh(beautifulBoxGeometry, beautifulBoxMaterial)
    strongBox.position.set(0, 0, 0)
    strongBox.scale.set(0.3, 1.5, 0.3)

    const groundBox = new THREE.Mesh( beautifulBoxGeometry, beautifulBoxMaterial );
    groundBox.position.set( 0, -1, 0 );
    groundBox.scale.set( 2.4, 0.5, 1.5 )

    tree = new THREE.Group()
    tree.add(groundBox)
    tree.add(strongBox)
    tree.rotation.y = 1
    tree.rotation.x = 0.5

    scene.add(tree)

    renderer =  new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
  
    document.body.appendChild( renderer.domElement )
}

function render() {
    requestAnimationFrame( render );
    tree.rotation.y += 0.007;
    renderer.render( scene, camera );
  
  }