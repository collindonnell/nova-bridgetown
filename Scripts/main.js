
exports.activate = function() {

}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


class TaskProvider {
    constructor() {

    }

    provideTasks() {
        let task = new Task("Bridgetown");

        task.setAction(Task.Build, new TaskProcessAction('/usr/bin/env', {
            args: ['bridgetown', 'build'],
            env: {}
        }));

        task.setAction(Task.Run, new TaskProcessAction('/usr/bin/env', {
            args:['yarn', 'start'],
            env: {}
        }));

        task.setAction(Task.Clean, new TaskProcessAction('/usr/bin/env', {
            args: ['bridgetown', 'clean'],
            env: {}
        }));

        return [task];
    }
}


nova.assistants.registerTaskAssistant(new TaskProvider(), {
    identifier: "bridgetown-tasks",
    name: "Bridgetown"
});

