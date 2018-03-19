module TodoItemsHelper

  def todo_item_tag(todo_item)
    content_tag(:li, todo_item_li_content(todo_item),
      {
        id: "todo_item_li_#{todo_item.id}",
        class: todo_item.done? ? 'done' : ''
      }
    )
  end

  private

  def todo_item_li_content(todo_item)
    (
      content_tag(:span, sanitize(todo_item.content)) +
      check_box_tag(
        dom_id(todo_item),
        todo_item.done?,
        todo_item.done?,
        data: {
          url: toggle_todo_list_todo_item_path(todo_item.todo_list, todo_item),
          remote: true,
          method: :put
        }
      ) +
      text_field_tag(
        'todo_item[content]',
        todo_item.content,
        data: {
          url: todo_list_todo_item_path(todo_item.todo_list, todo_item),
          remote: true,
          method: :put
        }
      ) +
      link_to(
        image_tag('/delete-icon-item.png'),
        todo_list_todo_item_path(todo_item.todo_list, todo_item),
        method: :delete
      ) +
      image_tag('/edit-icon-item.png')
    ).html_safe
  end
end
