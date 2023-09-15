class Subject {
	constructor() {
		this.observers = []; //this is state as an array
	}
	// Add methods here ///methods are the behavior the classes act upon
  addObserver(observer){
      this.observers.push(observer);
     
  }
  removeObserver(observer){
    this.observers = this.observers.filter((obs)=> obs !== observer)

  }
  notifyObservers() {
    this.observers.forEach((observer)=> observer.update());
    console.log("This is our array:",this.observers)
    //forEach built in 
  }
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}

const subject = new Subject(); 
 //instantiate our object---created an object
//create new object based on Subject class
const observer1= new Observer()
const observer2= new Observer()
const observer3= new Observer()
const observer4= new Observer()
const observer5= new Observer()
const observer6= new Observer()
const observer7= new Observer() ///created 7 observers baesd on Observer class

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
subject.addObserver(observer4);
subject.addObserver(observer5);
subject.addObserver(observer6);
subject.addObserver(observer7);

subject.notifyObservers();

subject.removeObserver(observer1);
subject.removeObserver(observer2);
subject.removeObserver(observer3);

subject.notifyObservers();
subject.notifyObservers();

const observer8= new Observer() //create another observer called observer8

subject.addObserver(observer8); //add the new observer and one that i removed before
subject.addObserver(observer1);

subject.notifyObservers(); //notify the observers of the subjects change of state





