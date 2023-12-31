const sidebarMenuItems = document.querySelectorAll(
    '.sidebar-nav .sidebar-nav__list li.with-submenu',
);

if (sidebarMenuItems.length > 0) {
    sidebarMenuItems.forEach((item) => {
        const submenu = item.querySelector('.submenu');

        item.addEventListener('click', () => {
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
                submenu.style.opacity = '0';
                submenu.style.visibility = 'hidden';
            } else {
                sidebarMenuItems.forEach((otherItem) => {
                    const otherSubmenu = otherItem.querySelector('.submenu');
                    if (otherSubmenu !== submenu) {
                        otherSubmenu.style.maxHeight = null;
                        otherSubmenu.style.opacity = '0';
                        otherSubmenu.style.visibility = 'hidden';
                    }
                });

                submenu.style.maxHeight = submenu.scrollHeight + 'px';
                submenu.style.opacity = '1';
                submenu.style.visibility = 'visible';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    if (accordions.length > 0) {
        accordions.forEach((accordion) => {
            const header = accordion.querySelector('.accordion__header');
            header.addEventListener('click', () => {
                if (!accordion.classList.contains('active')) {
                    accordions.forEach((acc) => {
                        acc.classList.remove('active');
                    });
                }

                accordion.classList.toggle('active');
            });
        });
    }
});
