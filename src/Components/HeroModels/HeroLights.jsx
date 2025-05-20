import React from 'react'
import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <spotLight position={[2,5,6]} intensity={100}
            angle={0.15}
            penumbra={0.2}
            color='4cc9f0'
            />

            <spotLight
            position={[4, 5, 4]}
            angle={0.3}
            penumbra={0.5}
            intensity={40}
            color="#4cc9f0"
            />

            <spotLight position={[-3,5,4]} intensity={40}
            angle={0.4}
            penumbra={0.5}
            color='4cc9f0'
            />

            <primitive
            object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
            position={[1, 3, 4]}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            intensity={15}
            />

            <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
            <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
        </>
    )
}

export default HeroLights;