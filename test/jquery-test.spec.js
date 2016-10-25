seajs.use([], function() {

    describe('public api ', function() {
        it('defined', function() {
            expect($).toBeDefined();
        });

        it('event', function(done) {
            var markup = $("<input type='text' id='inputfield' />").appendTo('body');
            markup.on('focus',function(){
                expect(document.activeElement).toBeDefined()
                // markup.val('2');

                var e = $.Event('keypress', { keyCode: 49 });
                markup.trigger(e);

                // markup.trigger('blur');
                console.log('111111:' + markup.val());

                markup.remove();
                done();

            });

            markup.on('change',function(){
                console.log('xxxxxx');
            })
            markup.trigger('focus');
        });


    });
});
