import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col justify-center m-10">
    <div className="flex justify-center items-center">
        <a href="https://github.com/Lalit899" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/sf-black/64/github.png" width="50" alt='github' />
        </a>
        <a href="http://www.linkedin.com/in/lalit-rathod-442a222b3" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/linkedin.png" width="40" alt='linkedin' />
        </a>
    </div>
    <p className="text-center text-gray-700 font-normal">&copy; 2024 Designed & Developed by Lalit Developer.</p>
</footer>
  )
}

export default Footer
