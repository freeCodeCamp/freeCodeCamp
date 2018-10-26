---
title: Docker
localeTitle: عامل ميناء
---
## عامل ميناء

Docker هو مشروع مفتوح المصدر يعتمد على حاويات Linux. ويستخدم ميزات Linux Kernel مثل مساحات الأسماء ومجموعات التحكم لإنشاء حاويات في أعلى نظام التشغيل.

يستخدم Docker حاويات (نسخة وقت تشغيل لصورة) لإنشاء بيئات يمكنها إنشاء التطبيقات وتشغيلها وشحنها وتشغيلها بسهولة. وتتمثل الفائدة الرئيسية في أن حاويات Docker تعمل بشكل منعزل تمامًا من بيئة المضيف افتراضيًا ، فقط بالوصول إلى ملفات ومنافذ المضيف إذا تمت تهيئتها للقيام بذلك. هذا هو بديل رائع للآلات virutal (VMs) التي غالبا ما تكون كثيفة الموارد. تمثل صورة القرص VMs وحالة التطبيق تشابكًا في إعدادات نظام التشغيل ، والاعتمادات المثبتة في النظام ، وتصحيحات أمان نظام التشغيل ، وأشياء أخرى سهلة الفك ، يصعب تكراره.

Docker هو برنامج كمبيوتر يقوم بإجراء محاكاة افتراضية على مستوى نظام التشغيل ، ويُعرف أيضًا باسم "containerization".

Docker هو نظام أساسي للمطورين و sysadmins لتطوير التطبيقات وتوزيعها باستخدام الحاويات. يسمى استخدام حاويات Linux لنشر التطبيقات بالحاويات. الحاويات ليست جديدة ، ولكن استخدامها لنشر التطبيقات بسهولة هو.

تزداد شعبية استخدام الحاويات لأن الحاويات هي:

*   مرنة: حتى التطبيقات الأكثر تعقيدًا يمكن نقلها بالحاويات.
*   خفيفة الوزن: حاويات الرافعة ومشاركة النواة المضيفة.
*   للتبادل: يمكنك نشر التحديثات وترقيات على الطاير.
*   محمول: يمكنك الإنشاء محليًا ونشرها في السحاب وتشغيلها في أي مكان.
*   قابلة للتحجيم: يمكنك زيادة نسخ متماثلة حاوية وتوزيعها تلقائيًا.
*   قابل للتكديس: يمكنك تكديس الخدمات رأسيًا وتطيرًا سريعًا.

التثبيت [لنظام Mac](https://docs.docker.com/docker-for-mac/install/)

تركيب [ويندوز](https://docs.docker.com/docker-for-windows/install/)

التثبيت [لأوبونتو](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_جميع روابط thoses هي ل Docker CE (إصدار المجتمع)_

* * *

## اختبار Docker الإصدار

لاختبار ما إذا كان التطبيق سارًا بشكل جيد ، قم بتشغيل:

 `docker --version 
` 

تأكد من أن لديك مخرجات تبدو كالتالي:

 `Docker version 18.06.1-ce, build e68fc7a 
` 

* * *

## اختبار تركيب عامل الميناء

اختبار أن التثبيت الخاص بك يعمل عن طريق تشغيل صورة Docker بسيطة ، مرحبا العالم:

 `docker run hello-world 
 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
` 

### ما هي الحاويات ثم:

ببساطة ، ليس أكثر من تعبئة عملية / تطبيق وهي تبعيات إلى صورة قابلة للتوزيع يمكن تشغيلها في عزلة.

### لماذا نحتاج Docker:

إنه يجعل حياة مهندسي البرمجيات أمرًا سلسًا جدًا حيث سيعملون دائمًا على نفس بيئة التطوير. يساعد في مشاركة المنتج النهائي للعملاء / الفرق الأخرى دون القلق بشأن مشكلات البيئة. إنه يقلل من كمية الأجهزة التي نحتاجها لتشغيل تطبيقاتنا من خلال عدم إهدارها لطبقة نظام التشغيل غير الضرورية.

## مفاهيم Docker الأساسية

### عامل الميناء

محرك Docker هو الطبقة التي يعمل عليها Docker. إنه وقت التشغيل الخفيف والأدوات التي تدير الحاويات والصور والبناء وأكثر من ذلك. يتم تشغيله أصلاً على أنظمة Linux ويتكون من:

1.  A Docker Daemon الذي يعمل في الكمبيوتر المضيف.
    
2.  عميل Docker الذي يتصل بعد ذلك بـ Docker Daemon لتنفيذ الأوامر.
    
3.  A REST API للتفاعل مع Docker Daemon عن بعد.
    

### عميل عامل الميناء

عميل Docker هو ما تتعامل معه ، بصفتك المستخدم النهائي لشركة Docker. فكر في الأمر على أنه واجهة المستخدم لـ Docker.

### عامل الميناء الشيطان

إن Docker daemon هو ما ينفذ فعليًا الأوامر المرسلة إلى عميل Docker - مثل إنشاء ، وتشغيل ، وتوزيع حاوياتك. يعمل Docker Daemon على الجهاز المضيف ، ولكن كمستخدم ، فأنت لا تتواصل مباشرة مع Daemon. يمكن تشغيل عميل Docker على الجهاز المضيف أيضًا ، ولكنه ليس مطلوبًا. يمكن تشغيله على جهاز مختلف والتواصل مع Docker Daemon الذي يعمل على الجهاز المضيف.

### Dockerfile

Dockerfile هو المكان الذي تكتب فيه التعليمات لبناء صورة Docker. يمكن أن تكون هذه التعليمات: **RUN apt-get y install some-package** : to install a software package **EXPOSE 8000** : لعرض منفذ **ENV ANT\_HOME / usr / local / apache-ant** لتمرير متغير بيئة وما إلى ذلك. بمجرد الانتهاء من إعداد Dockerfile ، يمكنك استخدام الأمر لبناء المرسى لبناء صورة منه. إليك مثال على Dockerfile:

 `# Start with ubuntu 14.04 
 FROM ubuntu:14.04 
 
 MAINTAINER freeCodeCamp@gmail.com 
 
 # For SSH access and port redirection 
 ENV ROOTPASSWORD sample 
 
 # Turn off prompts during installations 
 ENV DEBIAN_FRONTEND noninteractive 
 RUN echo "debconf shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections 
 RUN echo "debconf shared/accepted-oracle-license-v1-1 seen true" | debconf-set-selections 
 
 # Update packages 
 RUN apt-get -y update 
 
 # Install system tools / libraries 
 RUN apt-get -y install python3-software-properties \ 
    software-properties-common \ 
    bzip2 \ 
    ssh \ 
    net-tools \ 
    vim \ 
    curl \ 
    expect \ 
    git \ 
    nano \ 
    wget \ 
    build-essential \ 
    dialog \ 
    make \ 
    build-essential \ 
    checkinstall \ 
    bridge-utils \ 
    virt-viewer \ 
    python-pip \ 
    python-setuptools \ 
    python-dev 
 
 # Install Node, npm 
 RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - 
 RUN apt-get install -y nodejs 
 
 # Add oracle-jdk7 to repositories 
 RUN add-apt-repository ppa:webupd8team/java 
 
 # Make sure the package repository is up to date 
 RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list 
 
 # Update apt 
 RUN apt-get -y update 
 
 # Install oracle-jdk7 
 RUN apt-get -y install oracle-java7-installer 
 
 # Export JAVA_HOME variable 
 ENV JAVA_HOME /usr/lib/jvm/java-7-oracle 
 
 # Run sshd 
 RUN apt-get install -y openssh-server 
 RUN mkdir /var/run/sshd 
 RUN echo "root:$ROOTPASSWORD" | chpasswd 
 RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config 
 
 # SSH login fix. Otherwise user is kicked off after login 
 RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd 
 
 # Expose Node.js app port 
 EXPOSE 8000 
 
 # Create tap-to-android app directory 
 RUN mkdir -p /usr/src/my-app 
 WORKDIR /usr/src/my-app 
 
 # Install app dependencies 
 COPY . /usr/src/my-app 
 RUN npm install 
 
 # Add entrypoint 
 ADD entrypoint.sh /entrypoint.sh 
 RUN chmod +x /entrypoint.sh 
 ENTRYPOINT ["/entrypoint.sh"] 
 
 CMD ["npm", "start"] 
` 

#### معلومات اكثر:

*   [المبتدئ ودية الوثيقة](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
*   [عامل الميناء الوثائق الرسمية](https://docs.docker.com/get-started/)
*   [جرب Docker Online](http://training.play-with-docker.com/)