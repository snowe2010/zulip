set_global('$', global.make_zjquery());
set_global('document', 'document-stub');
var noop = () => {};

set_global('MessageListView', function () { return {}; });
zrequire('FetchStatus', 'js/fetch_status');
zrequire('Filter', 'js/filter');
zrequire('MessageListData', 'js/message_list_data');
zrequire('message_list');
set_global('blueslip', global.make_zblueslip());

set_global('message_store', {});


function stub_message_view(list) {
    list.view.append = noop;
    list.view.maybe_rerender = noop;
    list.view.prepend = noop;
}

function make_all_list() {
    return new message_list.MessageList({});
}

function reset_lists() {
    message_list.all = make_all_list();
    stub_message_view(message_list.all);
}


function make_msg(msg_id) {
    return {
        id: msg_id,
        unread: true,
        topic: 'whatever',
    };
}

function make_msgs(msg_ids) {
    return _.map(msg_ids, make_msg);
}

run_test('initialize', () => {
    reset_lists();
    message_list.all.add_messages(make_msgs([35, 25, 15, 45]))
    console.log(message_list.all.get(35))


    console.log(message_list.all)

});
