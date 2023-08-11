InstallKernelDependencies() {
    sudo apt-get install -y \
        libx11-xcb1 \
        libxrandr2 \
        libxcomposite1 \
        libxcursor1 \
        libxdamage1 \
        libxfixes3 \
        libxi6 \
        libxtst6 \
        libgtk-3-0 \
        libatk1.0-0 \
        libdbus-glib-1-2
}

InstallKernelDependencies