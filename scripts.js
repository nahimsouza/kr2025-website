
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
          <li><a href="call_kr_and_constraints.html">KR and Constraints</a></li>
          <li><a href="call_tutorial_and_workshop.html">Tutorial and Workshop Proposals</a></li>
          <li><a href="call_eca_award.html">Nominations: KR Early Career Award</a></li>
          <li><a href="call_tot_award.html">Nominations: KR Test of Time Award</a></li>
          <li><a href="call_dsa_award.html">Nominations: KR Distinguished Service Award</a></li>
          <li><a href="call_doctoral_consortium.html">Doctoral Consortium Applications</a></li>
          <li><a href="call_video_track.html">Video Track</a></li>
          <li><a href="call_recently_published.html">Recently Published Research Track</a></li>
          <li><a href="call_student_grants.html">Student Grants</a></li>
          <li><a href="call_dni_grants.html">Diversity and Inclusion Grants</a></li>
        </ul>
      </li>
      <li><a href="#">Program &#9662;</a>
        <ul class="dropdown">
          <li><a href="schedule.html">Schedule</a></li>
          <li><a href="speakers.html">Invited Speakers</a></li>
          <li><a href="tutorial_and_workshop.html">Workshops &amp; Tutorials</a></li>
          <li><a href="accepted.html">Accepted Submissions</a></li>
          <li><a href="https://proceedings.kr.org/2025/" target="_blank">KR 2025 Proceedings</a></li>
          <li><a href="https://ceur-ws.org/Vol-4078/" target="_blank">KR-DC Proceedings</a></li>
        </ul>
      </li>
      <li><a href="#">Attendee Info &#9662;</a>
        <ul class="dropdown">
          <li><a href="info_venue.html">Venue</a></li>
          <li><a href="info_visa.html">Visa</a></li>
          <li><a href="info_registration.html">Registration</a></li>
          <li><a href="info_accomodation.html">Accommodation</a></li>
          <li><a href="info_gallery.html">Visit Melbourne</a></li>
        </ul>
      </li>
      <li><a href="#">Organization &#9662;</a>
        <ul class="dropdown">
          <li><a href="organization.html">General</a></li>
          <li><a href="org_area_chairs.html">Area Chairs</a></li>
          <li><a href="org_pc_members.html">Program Committee Members</a></li>
        </ul>
      </li>
      <li><a href="sponsoring.html">Sponsoring</a></li>
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
    <p>© Copyright <a href="https://github.com/nahimsouza/kr2025-website/" target="_blank">KR 2025 Website</a>. MIT License.</p>
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


  // Highlight dates
  function highlightDates() {
    const elements = document.querySelectorAll('.date');

    // Get the AoE time based on local timezone
    const now = new Date();
    const nowAoE = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) - (12 * 60 * 60 * 1000));

    console.log(nowAoE)

    elements.forEach(el => {
      const dateStr = el.getAttribute("date-value");
      const eventDate = new Date(dateStr); // Parsed in local or UTC depending on format
      const eventDateEnd = new Date(eventDate.getTime() + (24 * 60 * 60 * 1000) - 1000); // 23h59m59s

      // Calculate the difference in days
      const diffInMs = eventDateEnd - nowAoE;
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      if (diffInDays < 0) {
        el.classList.add('past-date');
      } else if (diffInDays < 7) {
        el.classList.add('upcoming-date');
      }
    });
  }

  highlightDates();

}

window.onload = loadComponents;
