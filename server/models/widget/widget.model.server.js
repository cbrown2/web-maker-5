const mongoose = require("mongoose");
const WidgetSchema = require ("widget.schema.server")
const WidgetModel = mongoose.model("widgetModel", WidgetSchema);

WidgetModel.createWidget =
 createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage
WidgetModel.findWidgetbyId = 
findWidgetById;
WidgetModel.updateWidget = 
updateWidget;
WidgetModel.deleteWidget = 
deleteWidget;

function createWidget(widget) {
    return WidgetModel.create(widget);
 }
function findAllWidgetsForPage(pid) {
    return widgetModel.find({ pageById: pid });
}
function findWidgetById(wgid) {
    return widgetModel.findById(wgid);
}

function updateWidget(wgid, widget) {
    return widgetModel.update({_id: wgid},
        widget);  
}

function deleteWidget(wgid) {
    return widgetModel.deleteOne({ _id: wgid});

}
module.exports = WidgetModel;