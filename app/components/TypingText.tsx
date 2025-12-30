'use client';

import { useEffect, useRef, useState } from 'react';

interface TypingTextProps {
    text: string;
    className?: string;
}

export default function TypingText({ text, className = '' }: TypingTextProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <h2 ref={elementRef} className={`${className} inline-block`}>
            {text.split(' ').map((word, wordIndex, words) => {
                const startIndex = words
                    .slice(0, wordIndex)
                    .reduce((acc, w) => acc + w.length + 1, 0);

                return (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split('').map((char, charIndex) => (
                            <span
                                key={charIndex}
                                className={`inline-block transition-opacity duration-75 ${isVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(startIndex + charIndex) * 30}ms` }}
                            >
                                {char}
                            </span>
                        ))}
                        {wordIndex < words.length - 1 && (
                            <span
                                className={`inline-block transition-opacity duration-75 ${isVisible ? 'opacity-100' : 'opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(startIndex + word.length) * 30}ms` }}
                            >
                                &nbsp;
                            </span>
                        )}
                    </span>
                );
            })}
        </h2>
    );
}
