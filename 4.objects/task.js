function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.hasOwnProperty(`marks`) === true){
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(this.hasOwnProperty(`marks`) === false || this.marks.length === 0){
    return 0;
  }

  const averageSum = this.marks.reduce((acc, mark) => acc + mark,0);
  const gradeAverage = averageSum / this.marks.length

  return gradeAverage
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
