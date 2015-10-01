'use strict';
var work = {
  'jobs': [{
    'employer': 'Self-employed',
    'title': 'Translator',
    'location': '(remote/telecommuter)',
    'dates': 'September 2011-',
    'description': 'Translator of Japanese and German into English in the fields of intellectual property and scientific research publishing.'
  }, {
    'employer': 'Park IP',
    'title': 'Project Management Associate',
    'location': 'New York, NY',
    'dates': 'July 2010-September 2011',
    'description': 'Coordinated a global network of translators to meet corporate clients\' translation needs.'
  }]
};

var projects = {
  'projects': [{
    'title': 'Patent for a \'mobile telephone\'',
    'dates': 'Published on Nov 6, 2013',
    'description': 'A mobile telephone in which a cartilage conduction unit for making contact with the ear cartilage is provided to at least one of two corner parts at an upper side of the mobile telephone. [...]',
    'images': ['images/project1_image1.png', 'images/project1_image2.png'],
    'link': 'http://www.google.com/patents/EP2661055A1'
  }, {
    'title': 'Patent for a \'heat pump system\'',
    'dates': 'Published on Nov 29, 2012',
    'description': 'A refrigerant circuit includes a compressor, a heat source-side heat exchanger, and a usage-side heat exchanger capable of heating an aqueous medium. [...]',
    'images': ['images/project2_image1.png', 'images/project2_image2.png'],
    'link': 'https://www.google.com/patents/US20120297808'
  }]
};

var bio = {
  'name': 'Spencer Walle',
  'role': 'Aspiring Front-end Web Developer',
  'welcomeMessage': 'Welcome to my résumé and portfolio!',
  'contacts': {
    'email': 'spncrwll@gmail.com',
    'location': 'Reykjavík, Iceland'
  },
  'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery (and jQuery UI)', 'Bootstrap'],
  'bioPic': 'images/bioPic.jpg',
  'livedBefore': ['Marseille, France', 'Barcelona, Spain', 'Minneapolis, MN']
};

var badges = {
'linkedIn': '<a href="https://is.linkedin.com/pub/spencer-walle/20/876/3ab" target="_blank"><img src="images/In-2C-128px-R.png" width="20" height="20" alt="View Spencer Walle\'s LinkedIn profile" style="float:right"></a>',
'googlePlus': '<a href="https://plus.google.com/+SpencerWalle" target="_blank"><img src="https://developers.google.com/+/images/branding/g+138.png" width="20" height="20" alt="View Spencer Walle\'s Google+ profile" style="float:right"></a>',
'gitHub': '<a href="https://github.com/spncrwll" target="_blank"><img src="images/GitHub-Mark-Light-120px-plus.png" width="20" height="20" alt="View Spencer Walle\'s Github profile" style="float:right"></a>'
}

var education = {
  'schools': [{
    'name': 'Princeton University',
    'location': 'Princeton, NJ (USA)',
    'degree': 'BA',
    'major': 'Near Eastern Studies, South Asian Studies',
    'dates': '2006-2010',
    'url': 'http://www.princeton.edu'
  }, {
    'name': 'Middlesex School',
    'location': 'Concord, MA (USA)',
    'degree': 'High school',
    'major': 'N/A',
    'dates': '2002-2006',
    'url': 'http://www.mxschool.edu'
  }],
  'onlineCourses': [{
    'title': 'Front-end Web Development',
    'school': 'Udacity',
    'dates': 'August 2015-present',
    'url': 'http://www.udacity.com',
    'courseURL': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }, {
    'title': 'HTML & CSS, jQuery',
    'school': 'Codecademy',
    'dates': 'April 2015-present',
    'url': 'http://www.codecademy.com',
    'courseURL': 'https://www.codecademy.com/spencerwalle'
  }]
};
var data = '%data%';
var $header = $('#header');
badges.together = badges.linkedIn + badges.googlePlus + badges.gitHub;

// begin section of code that appends information
// name, role, biopic, welcome message
bio.displayInfo = function() {
  var formattedName = HTMLheaderName.replace(data, bio.name);
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  var formattedbioPic = HTMLbioPic.replace(data, bio.bioPic);
  var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
  $header.prepend(" " + formattedRole + badges.together + '<hr/>');
  $header.prepend(formattedName);
  $header.append(formattedbioPic);
  $header.append(formattedWelcome);
};
bio.displayInfo();

// header and footer contacts
bio.displayContacts = function() {
  var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
  var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

  $('#topContacts').append(formattedEmail + formattedLocation);
  $('#footerContacts').append(formattedEmail + formattedLocation);
};
bio.displayContacts();

//skills
bio.displaySkills = function() {
  $header.append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
    $('#skills').append(formattedSkill);
  }
};
bio.displaySkills();

//education
education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name).replace('#', education.schools[i].url);
    var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].major);
    $('.education-entry:last').append(formattedSchoolName + formattedDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
  }
  $('#education').append(HTMLonlineClasses);
  for (var i = 0; i < education.onlineCourses.length; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
    var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
    var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url)
    $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates);
  }
};
education.display();

// jobs
work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
    var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
    var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
    $('.work-entry:last').append(formattedEmployerAndTitle + formattedDates + formattedLocation + formattedDescription);
  }
};
work.display();

// projects
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title).replace('%link%', projects.projects[i].link);
    var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
    var formattedDescrip = HTMLprojectDescription.replace(data, projects.projects[i].description);
    $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescrip);
    var imageNumber = 1;
    for (var j = 0; j < projects.projects[i].images.length; j++) {
      var imageNumberString = (j + 1).toString();
      var formattedImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]).replace('%number%', imageNumberString);
      $('.project-entry:last').append(formattedImage);
    }
  }
}
projects.display();
//end code that appends information

// international naming
$('#main').append(internationalizeButton);

function inName(name) {
  name = name.trim().split(' ');
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + ' ' + name[1];
}

/// map
$('#mapDiv').append(googleMap);

/// accordion
$(document).on('ready', function() {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: 'content'
  });
});
