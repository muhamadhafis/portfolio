'use client';

import { useEffect, useState } from 'react';

const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function ScrollNavigation() {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show navigation after scrolling past hero section
            const heroSection = document.querySelector('section');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                setIsVisible(window.scrollY > heroBottom - 200);
            }

            // Determine active section
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
            aria-label="Page sections"
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center gap-3 transition-all duration-300"
                    aria-label={`Navigate to ${section.label}`}
                    aria-current={activeSection === section.id ? 'true' : undefined}
                >
                    {/* Label */}
                    <span
                        className={`text-sm font-medium transition-all duration-300 ${activeSection === section.id
                                ? 'opacity-100 text-black-google translate-x-0'
                                : 'opacity-0 text-gray-google translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                    >
                        {section.label}
                    </span>

                    {/* Dot/Line indicator */}
                    <span className="relative flex items-center justify-center">
                        <span
                            className={`transition-all duration-300 rounded-full ${activeSection === section.id
                                    ? 'w-3 h-3 bg-blue-500'
                                    : 'w-2 h-2 bg-gray-300 group-hover:bg-gray-400'
                                }`}
                        />
                        {activeSection === section.id && (
                            <span className="absolute w-5 h-5 bg-blue-500/20 rounded-full animate-ping" />
                        )}
                    </span>
                </button>
            ))}
        </nav>
    );
}
