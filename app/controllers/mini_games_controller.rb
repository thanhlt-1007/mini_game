class MiniGamesController < ApplicationController
  def index
    @questions = Settings.questions
    @answers = Settings.answers.map {|answer| answer.split(",")}
    @index = Settings.index
  end
end
