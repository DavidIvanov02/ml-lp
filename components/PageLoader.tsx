import React from 'react';

export default function PageLoader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
            <div className="relative">
                {/* Math symbols floating around */}
                <div className="absolute -top-16 -left-16 text-4xl text-blue-500 animate-float-slow opacity-70">π</div>
                <div className="absolute top-8 -right-16 text-4xl text-purple-500 animate-float-medium opacity-70">∑</div>
                <div className="absolute -bottom-16 -right-12 text-4xl text-green-500 animate-float-fast opacity-70">∞</div>
                <div className="absolute -bottom-12 left-8 text-4xl text-yellow-500 animate-float-medium opacity-70">∫</div>

                {/* Main loader */}
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4">
                        <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin"></div>
                        <div className="absolute inset-0 rounded-full border-r-4 border-purple-500 animate-spin-slow"></div>
                        <div className="absolute inset-2 rounded-full border-b-4 border-green-500 animate-spin-reverse"></div>
                        <div className="absolute inset-4 flex items-center justify-center">
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">M</span>
                        </div>
                    </div>
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        MathLearns
                    </div>
                    <p className="mt-2 text-sm opacity-70">Loading amazing math content...</p>
                </div>
            </div>
        </div>
    );
} 