module ApplicationHelper
  def answer_char_css answer_char, answer_char_index, index
    has_text_css = "has-text" unless answer_char == "_"
    final_answer_css = "final-answer" if answer_char_index == index

    "#{has_text_css} #{final_answer_css}"
  end
end
