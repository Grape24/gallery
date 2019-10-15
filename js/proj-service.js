'use strict'
//creatProj();
var gProj = createProjects();

function createProj(id, name, title, desc, url, labels){
    return  {
            id: id,
            name: name,
            title: title,
            desc: desc,
            publishedAt: 1571138274355,
            url: url,
            labels: labels
            }
}

function createProjects(){
    return [
    createProj('chess-proj','Playing Chess','Playing Chess','Vanilla JS project that shows the possible move for every piece in chess.','chess-proj',['Matrixes', 'Vanilla JS', 'Matrix Loop', 'Click Events']),
    createProj('minesweeper','Mine Sweeper','Mine Sweeper','The iconic board game executed in Vanilla JS.','minesweeper',['Matrixes', 'Vanilla JS', 'Matrix Loop', 'Click Events']),
    createProj('todo-mvc','To Do App','To Do App','Vanilla JS To-Do app based on MVC structure.','todo-mvc',['MVC', 'Vanilla JS', 'Sorting', 'Click Events']),
    createProj('guess-who','Guess Who?','Guess Who?','Jquery game using MVC structure, resembling Akinator.','guess-who',['Binary Tree', 'Jquery', 'Bootstrap', 'Click Events']),
    createProj('responsive-theme','Pixel Perfect Theme','Pixel Perfect Theme','Responsive CSS theme made from given PSD.','responsive-theme',['Responsive Design', 'CSS', 'PSD', 'Click Events']),
    createProj('GridEx','Responsive Grid Gallery','Responsive Grid Gallery','A Responsive Grid Gallery from Given PSD.','GridEx',['Responsive Design', 'CSS', 'PSD', 'Grid'])]
}

function getProjects(){
    return gProj;
}
