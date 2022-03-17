let createNav = () =>{
    let nav = document.querySelector('.navigation');

    nav.innerHTML = `
                <div class="top">
                    <a href="index.html" class="logo">Clothing</a>
                    <div class="search">
                        <input type="text" placeholder="search here...">
                        <label class="fas fa-search"></label>
                    </div>

                    <div class="icons">
                        <div class="fas fa-user"></div>
                        <div class="fas fa-shopping-cart"></div>
                        <div class="fas fa-bars" id="menu-bars"></div>
                    </div>
                </div>

                <div class="bottom">
                    <nav class="nav-links">
                        <a href="index.html">home</a>
                        <a href="men.html">men</a>
                        <a href="women.html">women</a>
                        <a href="about_us.html">about us</a>
                    </nav>
                </div>
    `;
}

createNav();

let createFoot = () =>{
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <h2>Clothing</h2>
            <div class="social-contacts">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-telegram"></i>
            </div>
            <div class="phone-numbers">
                <p><span class="fa fa-phone"></span> phone</p>
                <p>+423432432</p>
                <p>+423652731</p>
            </div>
    `
}

createFoot();