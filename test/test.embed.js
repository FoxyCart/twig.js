var Twig = Twig || require("../twig"),
    twig = twig || Twig.twig;

describe("Twig.js Embed ->", function() {
    // Test loading a template from a remote endpoint
    it("it should load embed and render", function() {
        twig({
            id:   'embed',
            path: 'test/templates/embed-simple.twig',
            async: false
        });
        // Load the template
        twig({ref: 'embed'}).render({ }).trim().should.equal( ['START',
                                                               'A',
                                                               'base bar',
                                                               'new header',
                                                               'base footer',
                                                               'B',
                                                               '',
                                                               'A',
                                                               'base bar',
                                                               'base header',
                                                               'base footer',
                                                               'extended',
                                                               'B',
                                                               '',
                                                               'A',
                                                               'base bar',
                                                               'base header',
                                                               'extended',
                                                               'base footer',
                                                               'extended',
                                                               'B',
                                                               '',
                                                               'A',
                                                               'base bar',
                                                               'Super cool new header',
                                                               'Cool footer',
                                                               'B',
                                                               'END'].join('\n') );
    });

    it("it should render embed when `parent` function located in logic expression", function() {
        twig({
            id:   'embed2',
            path: 'test/templates/embed-parent-logic.twig',
            async: false
        });
        // Load the template
        twig({ref: 'embed2'}).render({ }).trim().should.equal( ['START',
                                                               'A',
                                                               'new header',
                                                               'base bar',
                                                               'base header',
                                                               '',
                                                               'base footer',
                                                               'B',
                                                               'END'].join('\n') );
    });

    it("it should render embed when blocks with `parent` function nested", function() {
        twig({
            id:   'embed3',
            path: 'test/templates/embed-nested-parent.twig',
            async: false
        });
        // Load the template
        twig({ref: 'embed3'}).render({ }).trim().should.equal( ['START',
                                                               'A',
                                                               'new header',
                                                               'new footer',
                                                               'base footer',
                                                               '',
                                                               'new footer',
                                                               'base footer',
                                                               '',
                                                               'B',
                                                               'END'].join('\n') );
    });

    it("it should use local data from updated block", function() {
        twig({
            id:   'embed4',
            path: 'test/templates/embed-parent-local-variables.twig',
            async: false
        });
        // Load the template
        twig({ref: 'embed4'}).render({'foo': 'base foo'}).trim().should.equal( ['START',
                                                               'A',
                                                               'new foo',
                                                               'base bar',
                                                               'base header',
                                                               '',
                                                               'B',
                                                               'END'].join('\n') );
    });

    it("it should not update local variables in blocks by the varables from the root of embed tag", function() {
        twig({
            id:   'embed5',
            path: 'test/templates/embed-parent-local-variables2.twig',
            async: false
        });
        // Load the template
        twig({ref: 'embed5'}).render({'foo': 'base foo'}).trim().should.equal( ['START',
                                                               'A',
                                                               'base foo',
                                                               'base bar',
                                                               'base header',
                                                               'B',
                                                               'END'].join('\n') );
    });

});
