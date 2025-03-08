module.exports = {
    theme: {
        extend: {
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-medium': 'float 7s ease-in-out infinite',
                'float-fast': 'float 5s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'spin-reverse': 'spin-reverse 6s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'spin-reverse': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(-360deg)' },
                },
            },
        },
    },
} 