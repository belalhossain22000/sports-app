export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">Live football scores</h2>
          <p className="text-sm mb-4">Latest football scores, fixtures, results and more</p>
          
          <div className="space-y-4 text-xs">
            <p>
              Live football score service on SoccerDesk provides latest football results and fixtures offering live scores information, match commentary, goal scorers, yellow and red cards, team formations, lineups and substitutions, match statistics and other details. Watch live action in matches from all over the world, including UEFA Champions League, England Premier League, Spanish La Liga, German Bundesliga, Italian Serie A and much more.
            </p>
            <p>
              Live match data includes fast and accurate updates of scores, minutes, results from all periods of the match (half-time, full time, extra time, penalty shoot-out etc.), goal scorers, assists, yellow/red cards, substitutions, live commentary, match statistics, line-ups, team form, head-to-head etc. Live team data includes an overview of all leagues, cups and tournaments in which the team takes part, as well as latest results and upcoming fixture from all those competitions. An up-to-date squad list is also provided for each team. Live league, cup or tournament data includes live standings and/or draws, a calendar of matches for the entire season, overview of top scorers and team statistics for selected competitions. All scores and statistics are updated automatically, so there is no need to refresh it manually.
            </p>
            <p>
              SoccerDesk also offers ways to customize tour experience. You can add your favourite leagues, cups and tournaments to Bookmarks to always see them on top and never miss an important match. You can also reorder your bookmarks to change their priorities and ensure that the most important matches are always on top. You can also add matches and teams you want to follow in Favourites and have all the important live scores, results and statistics easily accessible from a single place.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-wrap justify-between items-center text-xs">
            <div className="space-x-4">
              <a href="#" className="hover:text-white">Terms and Conditions of Use</a>
              <a href="#" className="hover:text-white">Privacy and Cookie Notice</a>
              <a href="#" className="hover:text-white">Contact</a>
              <a href="#" className="hover:text-white">Update consent</a>
            </div>
            <div className="mt-4 sm:mt-0">
              Copyright © 2024 SoccerDesk
            </div>
          </div>
        </div>
      </footer>
    )
  }