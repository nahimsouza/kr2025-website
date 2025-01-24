
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header>
        <div class="logo">
        <img src="images/the-amazing-conf-logo-blue-transparent.png" alt="Conference Logo" height="60px">
        </div>
        <nav>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="dates.html">Important Dates</a></li>
            <li><a href="#">Calls</a>
            <ul class="dropdown">
                <li><a href="#">Track 1</a></li>
                <li><a href="#">Track 2</a></li>
                <li><a href="#">Track 3</a></li>
            </ul>
            </li>
            <li><a href="#">Submissions</a></li>
            <li><a href="#">Venue/Local</a>
            <ul class="dropdown">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
            </ul>
            </li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Sponsoring</a></li>
            <li><a href="#" class="registration-btn">Registration</a></li>
        </ul>
        </nav>
    </header>
    `

    footer = `
    <footer>
        <p>© Copyright 2025. Conferece Website Template - Designed by <a href="https://github.com/nahimsouza/conference-website/">nahimsouza</a>. MIT License.</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;
}

window.onload = loadComponents;