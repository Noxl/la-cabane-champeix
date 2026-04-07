document.addEventListener("snipcart.ready", function () {

    function initMenu() {
        const accountMenu = document.querySelector('.account-menu');
        const dropdown = document.querySelector('.account-dropdown');
        const statusDot = document.querySelector('.status-dot');
        const signinBtn = document.querySelector('.snipcart-customer-signin');

        if (!accountMenu || !dropdown || !statusDot || !signinBtn) {
            setTimeout(initMenu, 100);
            return;
        }

        let isLoggedIn = false;

        // ✅ CLICK behavior
        signinBtn.addEventListener('click', function (e) {

            if (isLoggedIn) {
                e.preventDefault();
                e.stopPropagation();

                dropdown.style.display =
                    dropdown.style.display === 'block' ? 'none' : 'block';
            }
        });

        // ✅ Close outside
        document.addEventListener('click', function (e) {
            if (!accountMenu.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });

        // ✅ Update UI
        function updateUI(customer) {
            if (customer && customer.email) {
                isLoggedIn = true;
                statusDot.style.backgroundColor = 'green';
            } else {
                isLoggedIn = false;
                statusDot.style.backgroundColor = 'red';
                dropdown.style.display = 'none';
            }
        }

        Snipcart.store.subscribe(() => {
            const state = Snipcart.store.getState();
            updateUI(state.customer);
        });

        document.addEventListener('snipcart.customer.login', (e) => updateUI(e.detail.customer));
        document.addEventListener('snipcart.customer.logout', () => updateUI(null));

        // ✅ Dropdown actions

        const orderBtn = dropdown.querySelector('.order-history');
        const logoutBtn = dropdown.querySelector('.logout');

        if (orderBtn) {
            orderBtn.addEventListener('click', function (e) {
                e.preventDefault();
                Snipcart.api.theme.cart.open(); // ✅ opens full account/cart UI
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                Snipcart.api.customer.signout(); // ✅ logout works
            });
        }

        console.log("✅ Fully working menu");

    }

    initMenu();
});