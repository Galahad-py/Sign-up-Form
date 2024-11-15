Password Validation Form with Responsive Design
A responsive signup form with password validation. The form ensures input fields are properly validated, user-friendly, and styled for mobile and desktop screens.

Features
Password Validation: Ensures passwords meet length requirements and match between fields.
Responsive Design: Form adjusts gracefully to different screen sizes.
Custom Fonts: Includes a downloaded font for unique styling.
Form Layout: Inputs are organized in a compact and user-friendly 2x2 grid layout.

Technologies Used
HTML5
CSS3 (including Grid and Flexbox)
JavaScript (vanilla)
Custom Fonts (via @font-face)

Getting Started
Prerequisites
A web browser (latest version recommended).
Installation
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/password-validation-form.git
Navigate to the project folder:
bash
Copy code
cd password-validation-form
Open index.html in your browser to view the form.

File Structure
bash
Copy code
password-validation-form/
├── index.html       # Main HTML file
├── styles.css       # Contains all styles for the project
├── script.js        # JavaScript for interactivity and validation
├── fonts/           # Directory for custom fonts
│   └── Norse-Bold.otf
└── images/          # Directory for background and logo images
    ├── background-image.jpg
    └── odin-lined.png
    
How to Use
Fill in the form fields.
Password fields:
Must be at least 8 characters long.
Must match the confirmation password field.
Use the "👁" toggle button to show or hide passwords.
Submit the form to proceed (backend implementation required).
Responsive Design
On smaller screens, the layout adjusts to fit the display.
The displayLogo div and signUpContainer stack vertically on mobile devices.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Added feature-name"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
