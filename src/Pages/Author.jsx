import React, { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'khubaibsurvivor';

export default function Author() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGitHubProfile() {
      try {
        // FIXED: Correct GitHub API endpoint with proper string formatting
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('GitHub user not found');
          }
          if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Try again later.');
          }
          throw new Error(`Failed to retrieve GitHub data (status ${response.status})`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0d1117] text-[#8b949e] font-sans">
        <div className="text-lg animate-pulse">Loading developer credentials...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0d1117] font-sans">
        <div className="text-lg text-[#f85149]">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans p-5">
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 w-full max-w-[350px] text-center shadow-2xl">
        <img
          src={profile.avatar_url}
          alt={`${profile.name || GITHUB_USERNAME}'s avatar`}
          className="w-[130px] h-[130px] rounded-full border-4 border-[#238636] object-cover mx-auto mb-4"
        />

        <h2 className="text-2xl font-semibold text-[#f0f6fc] my-1">
          {profile.name || GITHUB_USERNAME}
        </h2>

        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#58a6ff] hover:underline text-sm inline-block mb-4"
        >
          @{profile.login}
        </a>

        {profile.bio && (
          <p className="text-sm text-[#8b949e] leading-relaxed mb-5">
            {profile.bio}
          </p>
        )}

        <div className="flex justify-between border-t border-[#30363d] pt-5 mt-2">
          <div className="flex-1 text-center">
            <div className="text-xl font-bold text-[#f0f6fc]">{profile.followers}</div>
            <div className="text-[12px] text-[#8b949e] mt-1 uppercase tracking-wider">Followers</div>
          </div>

          <div className="flex-1 text-center">
            <div className="text-xl font-bold text-[#f0f6fc]">{profile.following}</div>
            <div className="text-[12px] text-[#8b949e] mt-1 uppercase tracking-wider">Following</div>
          </div>

          <div className="flex-1 text-center">
            <div className="text-xl font-bold text-[#f0f6fc]">{profile.public_repos}</div>
            <div className="text-[12px] text-[#8b949e] mt-1 uppercase tracking-wider">Repos</div>
          </div>
        </div>
      </div>
    </div>
  );
}