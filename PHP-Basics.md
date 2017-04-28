<h1>PHP Basics</h1>

<ul>
  <li>
    <a href="#">Previous</a>
  </li>
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Next</a>
  </li>

<h2>Introduction and What We Need For PHP</h2>

<p>You will only need a few things to get up and running. First, let's visit our wiki on <a href="#">Vagrant</a> and get that process going. 
Once you have Vagrant up and running, we'll need <a href="https://notepad-plus-plus.org/download/v6.9.html">Notepad++</a>. Once all your
new programs are up and running, we can start coding.</p>

<p>Open Notepad++, select <b>Language</b> from the top and find <b>PHP</b> under <b>P</b>. Then, select <b>File</b>, <b>Save As...</b>, 
and save your new file over the <b>index.php</b> in the <b>Public</b> folder <b>Vagrant</b> created earlier. At the end of the 
<b>Vagrant</b> documentation, you should have visited a link that was an IP address. It was a full web page showing you 
what Scotch Box had installed for you on your virtual machine. We just overwrote that file with our new code. Don't run away on us, 
here's a <a href="#">link</a> that you can visit to get the old <b>index.php</b> file.</p>

<p>We will set up the page as you would normally set up a <b>HTML</b> page, <b>DOCTYPE</b>, <b>body</b>, etc. Inside your body element, 
we'll place our first PHP script. You can copy and paste the following code into the editor.</p>

<b>
&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
    &lt;head&gt;<br />
	&lt;/head&gt;<br />
	&lt;body&gt;<br />
        &lt;p&gt;<br />
          &lt;?php<br />
            echo "My first line of PHP!"; <br />
          ?&gt;<br />
        &lt;/p&gt;<br />
	&lt;/body&gt;<br />
&lt;/html&gt;
</b>

<p>Now go to this IP address, http://192.168.33.10/ and you will see your work. You should see a white page with the text "My first line
of PHP!" at the top. Once you complete any changes in your php file, simply save it and then refresh the browser. Feel free to change
out the text in between the <b>" "</b> and refresh your browser to see the changes.</p>

<p>You only see what you put in the quotation marks. You created a set of <b>script</b> tags in the <b>HTML</b>, then you were able to
drop in some <b>PHP</b>. <b>Echo</b> outputs whatever text you chose as <b>HTML</b>.</p>
