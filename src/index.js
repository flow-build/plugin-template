const { Core } = require('@flow-build/compose');

// the method exported in run file setted in plugin file will be executed
// this method run asynchronously 
const method = async () => {
    // return context of this plugin execution
    // context can be activity_manager, proccess_state or api context;
    const context = Core.get_context();
    const input = Core.get_input('<your_input_name>'); // return data setted in plugin implementation

    console.log(context);
    console.log(input);

    // make the execution of this procces continue until all nexts middleware end.
    await Core.next();

    // this area is the return of all middlewares executed
    console.log('plugin works!');
}

module.exports = method;