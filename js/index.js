let scene, camera, renderer, geometry, group

init()
render()

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    geometry = new THREE.BoxGeometry(1, 1, 1)
    const darkLeafBeautifulBox = new THREE.MeshLambertMaterial({color: 0xD90166})
    const leaveLightMaterial = new THREE.MeshLambertMaterial({ color: 0xFF69B4 })
    const leaveDarkDarkMaterial = new THREE.MeshLambertMaterial({ color: 0xD90166 })
    const stemMaterial = new THREE.MeshLambertMaterial({ color: 0x7D5A4F })

    const light1 = new THREE.DirectionalLight(0xEEFFD3, 1)
    light1.position.set(0, 0, 1)
    scene.add(light1)

    const light2 = new THREE.DirectionalLight(0xFF0000, 0.4)
    light2.position.set(1, 0, 0)
    scene.add(light2)

    const light3 = new THREE.DirectionalLight(0xFFFFFF, 0.2)
    light3.position.set(0, 1, 0)
    scene.add(light3)

    const stem = new THREE.Mesh(geometry, stemMaterial)
    stem.position.set(0, 0, 0)
    stem.scale.set( 0.3, 1.5, 0.3 );

  var squareLeave01 = new THREE.Mesh( geometry, darkLeafBeautifulBox );
  squareLeave01.position.set( 0.5, 1.6, 0.5 );
  squareLeave01.scale.set( 0.8, 0.8, 0.8 );

  var squareLeave02 = new THREE.Mesh( geometry, darkLeafBeautifulBox );
  squareLeave02.position.set( -0.4, 1.3, -0.4 );
  squareLeave02.scale.set( 0.7, 0.7, 0.7 );

  var squareLeave03 = new THREE.Mesh( geometry, darkLeafBeautifulBox );
  squareLeave03.position.set(0.3, 1.7, -0.8 );
  squareLeave03.scale.set( 0.7, 0.7, 0.7 );

  var leaveDark = new THREE.Mesh( geometry, darkLeafBeautifulBox );
  leaveDark.position.set(0, 1.4, 0.1 );
  leaveDark.scale.set( 1, 1.8, 1 );

  var leaveLight = new THREE.Mesh( geometry, leaveLightMaterial );
  leaveLight.position.set( 0.2, 1.2, 0 );
  leaveLight.scale.set( 1.1, 0.5, 1.1 );

  var ground = new THREE.Mesh( geometry, leaveDarkDarkMaterial );
  ground.position.set( 0, -1, 0 );
  ground.scale.set( 2.4, 0.5, 1.5 );

  tree = new THREE.Group();
  tree.add( leaveDark );
  tree.add( leaveLight );
  tree.add( squareLeave01 );
  tree.add( squareLeave02 );
  tree.add( squareLeave03 );
  tree.add( ground );
  tree.add( stem );

  tree.rotation.y = 1;
  tree.rotation.x = 0.5;


  scene.add( tree );

  renderer =  new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement )
}

function render() {

    requestAnimationFrame( render );
  
    tree.rotation.y += 0.007;
  
    renderer.render( scene, camera );
  
  }