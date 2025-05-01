
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.

    // Create menu HTML once
    const menu = `
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="dates.html">Important Dates</a></li>
            <li><a href="#">Calls &#9662;</a>
                <ul class="dropdown">
                    <li><a href="call_main_track.html">Main Track</a></li>
                    <li><a href="call_kr_in_the_wild.html">KR in the Wild</a></li>
                    <li><a href="call_krr_in_ps.html">KR&amp;R in Planning &amp; Scheduling</a></li>
                    <li><a href="call_tutorial_and_workshop.html">Tutorial and Workshop Proposals</a></li>
                    <li><a href="call_eca_award.html">Nominations: KR Early Career Award</a></li>
                    <li><a href="call_tot_award.html">Nominations: KR Test of Time Award</a></li>
                    <li><a href="call_dsa_award.html">Nominations: KR Distinguished Service Award</a></li>
                    <li><a href="call_doctoral_consortium.html">Doctoral Consortium Applications</a></li>
                </ul>
            </li>
            <li><a href="#">Program &#9662;</a>
                <ul class="dropdown">
                    <li><a href="speakers.html">Invited Speakers</a></li>
                    <li><a href="tutorial_and_workshop.html">Workshops &amp; Tutorials</a></li>
                </ul>
            </li>
            <li><a href="#">Venue &amp; Location &#9662;</a>
                <ul class="dropdown">
                    <li><a href="gallery.html">Gallery</a></li>
                </ul>
            </li>
            <li><a href="organization.html">Organization</a></li>
            <!--
            <li><a href="#" class="action-link">Registration</a></li>
            -->
        </ul>
    `;
    
    const header = `
        <header>
            <nav>
                <a href="index.html">
                    <div class="logo">
                        <img src="images/logo_kr_blue_transparent.png" alt="Conference Logo">
                    </div>
                </a>
                ${menu}
            </nav>
            <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
            <div id="overlay-menu" class="overlay-menu">
                <div class="close-btn" id="close-menu">&times;</div>
                ${menu}
            </div>
        </header>
    `;

    const footer = `
    <footer>
        <p>© Copyright <a href="https://github.com/nahimsouza/kr2025-website/">KR 2025 Website</a>. MIT License.</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;

    // Responsive menu open/close
    document.querySelector('#menu').addEventListener('click', () => {
        document.getElementById('overlay-menu').classList.add('open');
    });
    
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('overlay-menu').classList.remove('open');
    });

    // Submenu toggle behavior
    const menuLinks = document.querySelectorAll('.overlay-menu ul li > a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const nextEl = link.nextElementSibling;
            if (nextEl && nextEl.classList.contains('dropdown')) {
                e.preventDefault();
                nextEl.classList.toggle('show');
            }
        });
    });

    // Close menu if window size changes
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    mediaQuery.addEventListener('change', (event) => {
        if (event.matches) {
            document.getElementById('overlay-menu').classList.remove('open');
        }
    });

}

window.onload = loadComponents;
