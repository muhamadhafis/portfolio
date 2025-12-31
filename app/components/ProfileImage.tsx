'use client';

import { useState } from 'react';

interface ProfileImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ProfileImage({ src, alt, className = '' }: ProfileImageProps) {
    const [isColorful, setIsColorful] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            onClick={() => setIsColorful(!isColorful)}
            className={`${className} ${isColorful ? 'grayscale-0' : 'grayscale hover:grayscale-0'} transition duration-500 cursor-pointer`}
        />
    );
}
