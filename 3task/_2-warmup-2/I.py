def array123(nums): return bool(sum(1 for i in range(len(nums)-2) if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] ==3 ))
