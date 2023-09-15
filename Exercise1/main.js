class Subject {
	constructor() {
		this.observers = [];
	}
	// Add methods here
    addObserver(observer) {
        this.observers.push(observer);
}
    removeObservers(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
          }
    
    notifyObservers() {
        this.observers.forEach((observer) => {
          observer.update()
        })


class Observer {
	update() {
		console.log('Observer updated!');
	}
}
const subject = new Subject();
const subscriber = new Observer();
const subscriber2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers(observer);