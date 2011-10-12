SC.TEMPLATES["todos"] = SC.Handlebars.compile("<h1>Todos</h1>\n{{#view Todos.CreateTodoView}}\n  <input id=\"new-todo\" type=\"text\" placeholder=\"What needs to be done?\" />\n{{/view}}\n\n{{#view Todos.StatsView id=\"stats\"}}\n  {{#view SC.Button classBinding=\"isActive\" target=\"Todos.todoListController\" action=\"clearCompletedTodos\"}}\n    Clear Completed Todos\n  {{/view}}\n  {{displayRemaining}} remaining.\n{{/view}}\n\n{{view SC.Checkbox class=\"mark-all-done\" title=\"Mark All as Done\" valueBinding=\"Todos.todoListController.allAreDone\"}}\n\n{{#collection SC.TemplateCollectionView contentBinding=\"Todos.todoListController\" itemClassBinding=\"content.isDone\"}}\n  {{view Todos.MarkDoneView}}\n{{/collection}}");