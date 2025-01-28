
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header>
    <nav>
        <a href="index.html">
            <div class="logo">
                <img src="images/logo_kr_blue_transparent.png" alt="Conference Logo" height="60px">
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="dates.html">Important Dates</a></li>
            <li><a>Venue/Local</a>
                <ul class="dropdown">
                    <li><a href="gallery.html">Gallery</a></li>
                </ul>
            </li>
            <li><a href="guidelines.html">Submissions</a></li>
            <!--
            <li><a href="#">Calls</a>
                <ul class="dropdown">
                    <li><a href="#">Track 1</a></li>
                    <li><a href="#">Track 2</a></li>
                    <li><a href="#">Track 3</a></li>
                </ul>
            </li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Sponsoring</a></li>
            <li><a href="#" class="registration-btn">Registration</a></li>
            -->
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `

    footer = `
    <footer>
        <p>© Copyright - KR2025 Website was based on <a href="https://github.com/nahimsouza/conference-website/">Conference Website Template</a>. MIT License.</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;

    // responsive menu
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

}

window.onload = loadComponents;
