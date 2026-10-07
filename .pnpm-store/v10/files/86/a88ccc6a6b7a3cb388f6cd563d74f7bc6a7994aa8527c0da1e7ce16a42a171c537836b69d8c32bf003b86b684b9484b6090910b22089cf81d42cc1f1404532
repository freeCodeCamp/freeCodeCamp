#!gmake
#
# Version: Apache License 2.0
#
# Copyright (c) 2013 MathJax Project
# Copyright (c) 2013 The MathJax Consortium
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

CUSTOM=custom.cfg

-include $(CUSTOM)

MFTRACE_MODIFIED=lib/mftrace-modified

all: config fonts

$(CUSTOM):
	@cp default.cfg $(CUSTOM);

$(CUSTOM).pl: $(CUSTOM)
	@echo "Creating Perl config file..."
	@cp $(CUSTOM) $(CUSTOM).pl
	@echo >> $(CUSTOM).pl # ensure that the config file ends by a new line
	@echo "MFTRACE_PATH=`$(WHICH) $(MFTRACE)`" >> $(CUSTOM).pl
	@$(SED) -i "s|^\([A-Z_0-9]*\)=\(.*\)|$$\1='\2';|" $(CUSTOM).pl
	@echo "1;" >> $(CUSTOM).pl

.PHONY: config
config: $(CUSTOM).pl

blacker: $(MFTRACE_MODIFIED)
$(MFTRACE_MODIFIED):
	$(PERL) -I. makeBlacker 15 # values between 10 and 30 seem best

pfa: $(MFTRACE_MODIFIED)
	@echo "cmr10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmr10

	@echo "cmmi10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --encoding $(TETEXENCODING)/aae443f0.enc --simplify cmmi10

	@echo "cmsy10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --encoding $(TETEXENCODING)/10037936.enc --simplify cmsy10

	@echo "cmex10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmex10

	@echo "cmbx10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmbx10

	@echo "cmbxti10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmbxti10

	@echo "cmti10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmti10

	@echo "msam10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify --encoding $(TETEXENCODING)/10037936.enc msam10

	@echo "msbm10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify --encoding $(TETEXENCODING)/10037936.enc msbm10

	@echo "cmmib10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --encoding $(TETEXENCODING)/aae443f0.enc --simplify cmmib10

	@echo "cmbsy10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --encoding $(TETEXENCODING)/10037936.enc --simplify cmbsy10

	@echo "cmtt10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmtt10

	@echo "cmss10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmss10
	@echo "cmssi10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmssi10
	@echo "cmssbx10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify cmssbx10

	@echo "eufm10"
	cp "`$(KPSEWHICH) eufm10.pfb`" eufm10.pfb
	@echo "eufb10"
	cp "`$(KPSEWHICH) eufb10.pfb`" eufb10.pfb

	# echo "eusm10"
	# $(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify eusm10
	# echo "eusb10"
	# $(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify eusb10

	@echo "rsfs10"
	$(PYTHON) $(MFTRACE_MODIFIED) --magnification 1000 --simplify --encoding $(BASEENCODING)/tex256.enc rsfs10

	mkdir -p pfa
	rm -f pfa/*
	mv *.pfa pfa
	mv *.pfb pfa

ff: pfa
	mkdir -p ff otf
	rm -f ff/* otf/*
	$(PERL) -I. makeFF

.PHONY: fonts
fonts: ff
	mkdir -p ttf woff woff2
	rm -f ttf/* woff/* woff2/*

	@for file in `ls ff/*.ff | $(SED) 's|ff/\(.*\)\.ff|\1|'`; do \
		echo ""; \
		echo $$file; \
		$(FONTFORGE) -lang=ff -script ff/$$file.ff; \
		\
		echo "Hinting $$file"; \
		if echo "$$file" | $(GREP) -q -e "Size[1-4]" -e "Typewriter"; then \
			$(TTFAUTOHINT) -f none -S --windows-compatibility --symbol ttf/$$file.ttf ttf/$$file.ttf.hinted; \
		else \
			$(TTFAUTOHINT) -f none -S --windows-compatibility ttf/$$file.ttf ttf/$$file.ttf.hinted; \
		fi; \
		mv ttf/$$file.ttf.hinted ttf/$$file.ttf; \
		\
		echo "Generating $$file..."; \
		$(PYTHON) generate_fonts.py ttf/$$file.ttf; \
		done

clean:
	rm -f $(CUSTOM).pl
	rm -f $(MFTRACE_MODIFIED) lib/blacker.mf
	rm -rf pfa ff otf ttf woff woff2
