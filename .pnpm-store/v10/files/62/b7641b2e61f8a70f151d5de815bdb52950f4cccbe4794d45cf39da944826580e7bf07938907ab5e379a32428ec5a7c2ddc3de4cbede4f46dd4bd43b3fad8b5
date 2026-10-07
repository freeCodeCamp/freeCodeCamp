
EXAMPLES = $(foreach EXAMPLE, $(wildcard examples/*.js), $(EXAMPLE))

.PHONY: test
test: $(EXAMPLES)

.PHONY: $(EXAMPLES)
$(EXAMPLES): ; node $@ && echo
