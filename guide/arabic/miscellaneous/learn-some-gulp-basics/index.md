---
title: Learn Some Gulp Basics
localeTitle: تعلم بعض أساسيات Gulp
---
غولب يمكنه فعل **الكثير** . هذا مجرد لمحة عامة عن الأساسيات. بمجرد فهمك لذلك ، يمكنك إضافة المزيد إلى Gulp بنفسك. لقد كانت وثائق الحزم المختلفة التي استخدمتها رائعة ولدينا أيضًا منتدى رائع على FreeCodeCamp مستعد للمساعدة في أي مشروع.

![شعار غولب](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)

## ما هو غالب؟

غالب هو عداء جافا سكريبت / مهمة. هل تستخدم Jade ، ولكنك تحتاج إلى HTML؟ ساس ، ولكن بحاجة إلى CSS؟ القهوة ، ولكن تحتاج إلى جافا سكريبت؟ أو ربما ترغب فقط في تجميع و / أو تقليل ما لديك بالفعل؟ يمكن لـ Gulp القيام بكل ذلك بسهولة ، لذا لن تضطر إلى العودة إلى المحطة بعد كل تغيير بسيط.

## لماذا استخدام Gulp؟

نحن نستخدم الكثير من CodePen على FreeCodeCamp. يتيح CodePen استخدام المعالجات التمهيدية دون الحاجة إلى القيام بأي شيء آخر. يمكنك عرض النسخة المترجمة إذا تم استخدام المعالج الأولي. يبدو مختلفا كثيرا. يمكنك إنشاء مشروع في React على CodePen ، اختر Babel كـ المعالج المسبق لـ JavaScript وكل شيء سيعمل. إذا كنت ستقوم بهذا المشروع نفسه محليًا دون معالجة كل شيء ، فلن تحصل على ما كنت تتوقعه. هذا هو المكان الذي يأتي فيه غلب.

## كيف أستخدم Gulp؟

مرة أخرى ، هذه مجرد نظرة عامة على الأساسيات. ستتم معالجة النظرة العامة إلى Sass إلى CSS ، وتسوية وتقليل أوراق الأنماط والنصوص ، وتطبيق ساعة Gulp. تحتاج إلى تثبيت Node و NPM على جهاز الكمبيوتر الخاص بك قبل القيام بأي شيء. على الأرجح لديك هذا بالفعل ، ولكن أدخل `node -v` و `npm -v` في الطرفية الخاصة بك للتحقق.

*   التغيير إلى دليل المشروع وتشغيل `npm init` في المحطة.
    
    *   هذا يخلق ملف `package.json` في دليل العمل.
        
    *   وسيكون هذا أيضًا وقتًا مناسبًا لتشغيل `node_modules/` `touch .gitignore` في المحطة وإضافة `node_modules/` إلى الملف ، لذلك لن تدفع جميع هذه الحزم إلى GitHub.
        
*   تشغيل `npm install --save-dev gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-uglify` in the terminal. قد يستغرق هذا بضع دقائق حتى تنتهي.
    
    *   هذا يقوم بتثبيت 6 `node_modules` مختلفة. يمكنك إلقاء نظرة على ملف `package.json` ومشاهدة كل هذه `devDependencies` المدرجة ضمن `devDependencies` وفي مجلد `node_modules` ومشاهدة كل حزمة قمت بتثبيتها.
        
    *   `gulp-concat` هو وصل الأنماط والكتابات، `gulp-minify-css` هو تصغير CSS، `gulp-rename` هي لإعادة تسمية الملف، `gulp-sass` هو ساس لCSS، و `gulp-uglify` هو تصغير JS.
        
*   قم بتشغيل `touch gulpfile.js` في المحطة.
    
    *   أنت الآن جاهز للبدء.
*   ستحتاج إلى طلب جميع الملفات التي حفظتها للتو. تفعل هذا في `gulpfile.js` .
    

 `    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
` 

*   نحن بحاجة إلى البدء في مكان ما ، لذلك ساس إلى CSS أولا؟ هنا سنقوم بمعالجة Sass إلى CSS ، وتقليل CSS ، وإعادة تسمية الملف.
    
    *   اسم المهمة `sass` (أكثر على ذلك لاحقا).
        
    *   في الدليل الحالي ، نبحث عن مجلد باسم `assets` ، ثم مجلد باسم `scss` ، ثم ملفًا باسم `main.scss` .
        
    *   نقوم بمعالجة Sass إلى CSS والتسجيل في حالة حدوث خطأ.
        
    *   يتم تصغير CSS. هذا هو مجرد التخلص من كل تلك الخطوط والفضاء الإضافي. لا يحتاج الكمبيوتر إلى تلك الملفات لقراءة الملف ويقلل بشكل كبير من حجم الملف.
        
    *   نظرًا لتخفيض حجم الملف الآن ، فمن المنطقي إعادة تسميته. `.min.css` .
        
    *   الخطوة الأخيرة هي حفظ ملف `main.min.css` مكان ما ، وسوف يكون في الدليل الحالي إلى مجلد باسم `public` ، ثم مجلد باسم `css` .
        

 `    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
` 

*   الآن يمكننا الحصول على المزيد من الأشياء في Gulp ومحاولة تجميع جميع ملفات النص البرمجي. ماذا لو كان لديك برنامج نصي واحد فقط الآن ، لذلك ليس لديك أي شيء لسلسلته؟ ربما تخلص من بعض من CDNs لديك وجعلها مخطوطات. لكنك ستحصل على مشاريع أكبر لها العديد من النصوص.
    
    *   يرجى ملاحظة أنني لا أغطي خرائط المصدر. أعتقد أن هذه هي الخطوة التالية بعد هذه النظرة الأساسية ، لذا انظر إليها بمجرد فهمك لما تفعله هنا.
        
    *   يتم تسمية المهام الحالية `concatScripts` و `minifyScripts` .
        
    *   هذا هو نفس الهيكل الأساسي مثل `sass` . تتم إضافة جميع الملفات إلى `gulp.src` ، لكن علينا أولاً حفظ هذا الملف المتسلسل قبل أن يصبح بالإمكان تصغيره.
        
    *   يسمى `uglify` جافا سكريبت بالإزالة `uglify` .
        
    *   هل تلاحظ `['concatScripts]` بعد `minifyScripts` ؟ وهذا يعني `concatScripts` سيتم تشغيل `concatScripts` فعليًا في كل مرة نحاول فيها تشغيل `minifyScripts` .
        

 `    gulp.task('concatScripts', function() { 
        return gulp.src([ 
            './assets/js/script-1.js', 
            './assets/js/script-2.js', 
            './assets/js/script-3.js' 
        ]) 
        .pipe(concat('app.js')) 
        .pipe(gulp.dest('./assets/js')); 
    }); 
 
    gulp.task('minifyScripts', ['concatScripts'], function() { 
        return gulp.src('assets/js/app.js') 
        .pipe(uglify()) 
        .pipe(rename('app.min.js')) 
        .pipe(gulp.dest('public/app/js')); 
    }); 
` 

*   يمكنك الآن الذهاب إلى محطة واكتب في `gulp sass` و / أو `gulp minifyScripts` . هذا سيدير ​​كل واحد ، لكننا نريد أن نجعل الأمر أسهل علينا. سنقوم بإنشاء بنية افتراضية ، حتى نتمكن من إدخال `gulp` في المحطة. سنقوم أيضاً بإضافة `gulp watch` ، لذلك عندما تقوم بحفظ ملف مدرج في الساعة ، فإنه سيعمل ما قلته لتشغيله.
    
    *   لقد صنعنا مهمة تسمى `build` . هذا مشابه جدًا لـ `minifyScripts` نظرًا لوجود مصفوفة فيه. كلما ندخل `gulp build` في محطة فستعمل `sass` و `minifyScripts` (الذي يمتد في الواقع `concatScripts` أولا).
        
    *   لقد أجرينا أيضًا مهمة تسمى `watch` . هذه هي مهمة وقت التوقف. في المحطة تقوم بتشغيل `gulp watch` . ستبقى Gulp مفتوحة على المحطة ، لذا ربما تريد تشغيلها في علامة تبويب أخرى. كلما يتم تحديث الملفات وحفظها في `scss` مجلد مع `.scss` تمديد `sass` سيتم تشغيل المهمة. ونفس الشيء بالنسبة لملف في `js` مجلد مع `.js` التمديد، ولكن `concatScripts` و `minifyScripts` سيتم تشغيل.
        
    *   المهمة الأخيرة هي `default` . يمكنك فقط تشغيل أداة `gulp` في الوحدة الطرفية وستعمل على تشغيل المهمة `default` . و `default` مهمة هنا تدعو ل `build` المهمة، التي تدير فقط كل المهام لدينا على الصفحة.
        

 `    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 
` 

هذا ما يجب أن يبدو عليه ملف `gulpfile.js` النهائي `gulpfile.js` :

 `    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
 
    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
 
    gulp.task('concatScripts', function() { 
        return gulp.src([ 
            './assets/js/script-1.js', 
            './assets/js/script-2.js', 
            './assets/js/script-3.js' 
        ]) 
        .pipe(concat('app.js')) 
        .pipe(gulp.dest('./assets/js')); 
    }); 
 
    gulp.task('minifyScripts', ['concatScripts'], function() { 
        return gulp.src('assets/js/app.js') 
        .pipe(uglify()) 
        .pipe(rename('app.min.js')) 
        .pipe(gulp.dest('public/app/js')); 
    }); 
 
    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 
`