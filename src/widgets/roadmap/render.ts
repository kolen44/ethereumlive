import * as THREE from 'three';
import React, { useEffect, useState } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function create3DModel(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set( 5, 2, 8 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    const element = document.getElementById('placeBox')
    element.appendChild( renderer.domElement );
    const light = new THREE.AmbientLight( 0xffffff ); // soft white light
    scene.add( light );
    renderer.setClearColor('#141214');
    const loader = new GLTFLoader();
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
    loader.load( '/medieval_fantasy_book/scene.gltf', function ( gltf ) {
        const model = gltf.scene;
                model.position.set( 1, 1, 0);
                model.scale.set( 0.1, 0.1, 0.1 );
                renderer.setSize( window.innerWidth, window.innerHeight );
        scene.add( model );

        function animate() {
            requestAnimationFrame( animate );
            if(window.innerWidth<=776){
                    model.scale.set( 0.05, 0.05, 0.05 );
                    renderer.setSize( window.innerWidth/1.25, window.innerHeight/2 );
                }else{
                    model.scale.set( 0.1, 0.1, 0.1 );
                    renderer.setSize( window.innerWidth, window.innerHeight );
                }
            // required if controls.enableDamping or controls.autoRotate are set to true
            //controls.update();

            renderer.render( scene, camera );

        }
        animate()
    }, undefined, function ( error ) {

        console.error( error );
    } );
} 