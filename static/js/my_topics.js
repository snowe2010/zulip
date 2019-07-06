var my_topics = (function () {

    require("simplebar");

    var exports = {};

    /*
    Find recent topics I'm participating in.
     */
    exports.find_my_topics = function () {
        var streams = _.chain(message_list.all.all_messages())
            .filter('sent_by_me')
            .filter('is_stream')
            .map((item) => {
                return [item.topic, item.stream_id, ]
            }).value();
        var private_convos = _.chain(message_list.all.all_messages())
            .filter('sent_by_me')
            .filter('is_private')
            .map((item) => {
                return [item.display_reply_to, item.to_user_ids ]
            }).value();
        console.log('STREAMS:');
        console.dir(streams);
        console.log('PRIVATE:');
        console.dir(private_convos);
        return [streams, private_convos];
    };

    return exports;
}());

if (typeof module !== 'undefined') {
    module.exports = my_topics;
}
window.my_topics = my_topics;
