const {
    Worker, ismainThread, parentPort,
    isMainThread,
} = require('worker_threads');

if(isMainThread){//부모일때
    const worker = new Worker(__filename);
    worker.on('message', message => console.Console.log('from worker', message));
    worker.on('exit', () => console.log('work exit'));
    worker.postMessage('ping');
}else{//워커일때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}