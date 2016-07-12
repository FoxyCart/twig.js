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

});
