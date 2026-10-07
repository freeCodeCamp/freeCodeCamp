Vagrant.configure("2") do |config|

  config.vm.define "mac" do |mac|
    config.vm.box = "devcert/macos"
    config.vm.network "public_network"

  config.vm.define "linux" do |linux|
    config.vm.box = "devcert/linux"
    config.vm.network "public_network"

  config.vm.define "windows" do |windows|
    config.vm.box = "devcert/windows"
    config.vm.network "public_network"

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = true
  end

end
