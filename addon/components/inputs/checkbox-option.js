import Ember from "ember";
import SelectOption from "ember-simple-form/components/inputs/select-option";

export default SelectOption.extend({
  tagName: "div",
  attributeBindings: [],

  isChecked: Ember.computed.alias("isSelected"),

  inputElementId: Ember.computed("elementId", function() {
    return this.get("elementId") + "-input";
  })
});
