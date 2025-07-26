import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'; // Importiamo Head per la SEO

export const Footer = () => (
    <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mt-8 pt-8 text-center">
                <p className="text-gray-400 font-mono">import &#123; <span className="text-green-400">Future</span> &#125; from <span className="text-red-500">ITAsociety</span>;</p>
                <p className="text-xs text-gray-500 mt-4">&copy; 2025 ITAsociety. We solve what others can't.</p>
            </div>
        </div>
    </footer>
);
